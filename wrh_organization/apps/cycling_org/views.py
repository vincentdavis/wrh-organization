import csv
import traceback
from datetime import date

from PIL import Image
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.db.models import Q, Count
from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.views.generic import TemplateView, DetailView
from django_ckeditor_5.forms import UploadFileForm
from django_ckeditor_5.views import storage as ck_storage
from dynamic_preferences.registries import global_preferences_registry
from wrh_organization.helpers.utils import get_random_upload_path
from .forms import UploadValidateFile
from .models import Organization, OrganizationMember, Event, Member, RaceResult, RaceSeries
from .validators import usac_license_on_record, valid_usac_licenses, wrh_club_match, wrh_bc_member, \
    wrh_club_memberships, wrh_email_match, wrh_local_association, wrh_usac_clubs, usac_club_match, bc_race_ready, \
    bc_individual_cup_ready, bc_team_cup_ready
from ..usacycling.models import USACRiderLicense

global_pref = global_preferences_registry.manager()

def is_org_admin(org: Organization, user) -> bool:
    try:
        return user.is_staff or org.organizationmember_set.filter(Q(member=user.member) & Q(is_admin=True)).exists()
    except:
        return None


@require_http_methods(["POST"])
@login_required
def ckeditor_upload_file(request):
    form = UploadFileForm(request.POST, request.FILES)
    try:
        Image.open(request.FILES["upload"]).verify()
    except OSError:
        traceback.print_exc()
        return JsonResponse({"error": {"message": "unexpected error on reading the file!"}})
    if form.is_valid():
        f = request.FILES["upload"]
        fs = ck_storage()
        file_path = get_random_upload_path(str(settings.CKEDITOR_5_STORAGE_BASE_PATH), f.name)
        file_name = fs.save(file_path, f)
        url = fs.url(file_name)
        return JsonResponse({"url": url})


# @login_required
@login_required
def validate(request):
    if request.method == 'POST':
        form = UploadValidateFile(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES['validate_file']  # Form key
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            reader = csv.DictReader(decoded_file)
            try:
                assert "License" in reader.fieldnames
                assert "First Name" in reader.fieldnames
                assert "Last Name" in reader.fieldnames
                assert "Club" in reader.fieldnames
            except AssertionError:
                return HttpResponse("Missing required field. Please check your CSV file and try again.")
            # Download CSV
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachement; filename="download.csv" '
            # Creating CSV 
            added_fields = ['WRH_USAC_LICENSE_ON_RECORD', 'WRH_VALID_USAC_LICENCES', 'WRH_USAC_CLUB_MATCH',
                            'WRH_USAC_CLUBS', 'WRH_CLUB_MATCH', 'WRH_BC_MEMBER',
                            'WRH_CLUB_MEMBERSHIPS', 'WRH_LOCAL_ASSOCIATION', 'BC_RACE_READY', 'BC_INDIVIDUAL_CUP_READY',
                            'BC_TEAM_CUP_READY']
            if "Email" in reader.fieldnames:
                added_fields.append("WRH_EMAIL_MATCH")
                email = True
            else:
                email = False
            verified = csv.DictWriter(response, fieldnames=reader.fieldnames + added_fields)
            verified.writeheader()
            for row in reader:
                row['WRH_USAC_LICENSE_ON_RECORD'] = usac_license_on_record(row['License'])
                row['WRH_VALID_USAC_LICENCES'] = valid_usac_licenses(row['License'])
                row['WRH_USAC_CLUB_MATCH'] = usac_club_match(row['License'], row['Club'])
                row['WRH_USAC_CLUBS'] = wrh_usac_clubs(row['License'])
                row['WRH_CLUB_MATCH'] = wrh_club_match(row['License'], row['Club'])
                row['WRH_BC_MEMBER'] = wrh_bc_member(row['License'])
                row['WRH_CLUB_MEMBERSHIPS'] = wrh_club_memberships(row['License'])
                row['WRH_LOCAL_ASSOCIATION'] = wrh_local_association(row['License'])
                row['BC_RACE_READY'] = bc_race_ready(row['License'])
                row['BC_INDIVIDUAL_CUP_READY'] = bc_individual_cup_ready(row['License'])
                row['BC_TEAM_CUP_READY'] = bc_team_cup_ready(row['License'], row['Club'])
                if email:
                    row['WRH_EMAIL_MATCH'] = wrh_email_match(row['Email'])
                verified.writerow(row)
        return response
    else:
        # GET method - render upload form
        form = UploadValidateFile()
    return render(request, 'validate.html', {'form': form})


class BCsignin(TemplateView):
    template_name = 'BC/BCsignin.html'
    pass


@method_decorator(csrf_exempt, name='dispatch')
class Events(TemplateView):
    template_name = 'BC/Events.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['Event'] = Event.objects.all().order_by('start_date').filter(end_date__gte=date.today())
        context['Featured'] = Event.objects.all().order_by('start_date').filter(Q(featured_event=True) & Q(end_date__gte=date.today()))
        context['EventTypes'] = global_pref['core_backend__event_tags']
        return context

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        query_set = Event.objects.all().order_by('start_date')
        query = Q(end_date__gte=date.today())
        if request.POST.get("filter", None) == 'usac_event':
            query &= Q(is_usac_permitted=True)
        if request.POST.get("filter", None) == 'featured':
            query &= Q(featured_event=True)
        if request.POST.get("event-type", None) and request.POST.get("event-type", None) != 'all':
            query &= Q(tags__contains=[request.POST.get("event-type", None)])
        print(query)
        context['Event'] = query_set.filter(query)
        return self.render_to_response(context)


@method_decorator(csrf_exempt, name='dispatch')
class EventDetails(DetailView):
    template_name = 'BC/EventDetails.html'
    model = Event

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['GOOGLE_MAP_API_TOKEN'] = settings.GOOGLE_MAP_API_TOKEN
        return context


@method_decorator(csrf_exempt, name='dispatch')
class Clubs(TemplateView):
    template_name = 'BC/Clubs.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['Org'] = Organization.objects.all()
        # TODO: make this faster
        club_counts = USACRiderLicense.objects.values('data__club').annotate(count=Count('id'))
        context['USACclub'] = {row['data__club']: row['count'] for row in club_counts if row['data__club']}
        # context['USACclub'] = dict()
        # for u in USACRiderLicense.objects.all():
        #     if u.data['club']:
        #         if u.data['club'] in context['USACclub'].keys():
        #             context['USACclub'][u.data['club']] += 1
        #         else:
        #             context['USACclub'][u.data['club']] = 1
        return context

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        context['Org'] = Organization.objects.filter(name__icontains=request.POST.get('org'))
        return self.render_to_response(context)
    
class ClubDetails(DetailView):
    template_name = 'BC/ClubDetails.html'
    model = Organization
    def get_context_data(self, **kwargs):
        context = super(ClubDetails, self).get_context_data(**kwargs)
        usacriders = USACRiderLicense.objects.filter(data__club=context['object'].name)
        context['USACrider'] = usacriders
        context['USACcount'] = usacriders.count()
        context['ClubAdmin'] = is_org_admin(context['object'], self.request.user)
        return context
    
class ClubReport(DetailView):
    template_name = 'BC/ClubReport.html'
    model = Organization
    def get_context_data(self, **kwargs):
        context = super(ClubReport, self).get_context_data(**kwargs)
        if is_org_admin(context['object'], self.request.user):
            usacriders = USACRiderLicense.objects.filter(data__club=context['object'].name)
            context['USACrider'] = usacriders
            context['USACcount'] = usacriders.count()
            # TODO: this is not the right way to do this.
            context['ClubAdminsId'] = OrganizationMember.objects.filter(
                Q(organization=context['object']) & (Q(is_admin=True) | Q(is_master_admin=True))).values_list('member', flat=True)
            return context
        else:
            context['USACrider'] = None
            context['USACcount'] = None
            context['ClubAdminsId'] = None
            return None

class RaceResults(TemplateView):
    template_name = 'BC/RaceResults.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # TODO: add pagination.
        context['RaceResults'] = RaceResult.objects.all().order_by(*['race__event__end_date', 'race', 'place'])[:100]
        # .order_by(['race__event', 'place', 'finish_status'])
        # print(context['RaceResults'])
        return context
    
class RaceSeriesList(TemplateView):
    template_name = 'BC/RaceSeries.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['RaceSeries'] = RaceSeries.objects.all().order_by('name')
        return context

class ProfileDetail(DetailView):
    template_name = 'BC/ProfileDetail.html'
    model = Member
    def get_context_data(self, **kwargs):
        context = super(ProfileDetail, self).get_context_data(**kwargs)
        if context['object'].usac_license_number and context['object'].usac_license_number_verified:
            lic = context['object'].usac_license_number  # Get and use it to query USACRider
            context['USACData'] = USACRiderLicense.objects.filter(license_number=lic)
        else:
            context['USACData'] = None
        return context
