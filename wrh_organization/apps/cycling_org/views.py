import traceback

from PIL import Image
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.sites.shortcuts import get_current_site
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django_ckeditor_5.forms import UploadFileForm
from django_ckeditor_5.views import storage as ck_storage

from wrh_organization.helpers.utils import get_random_upload_path

from django_ical.views import ICalFeed
from .models import Event


@require_http_methods(["POST"])
@login_required
def ckeditor_upload_file(request):
    form = UploadFileForm(request.POST, request.FILES)
    try:
        Image.open(request.FILES["upload"]).verify()
    except OSError as ex:
        traceback.print_exc()
        return JsonResponse({"error": {"message": "unexpected error on reading the file!"}})
    if form.is_valid():
        f = request.FILES["upload"]
        fs = ck_storage()
        file_path = get_random_upload_path(str(settings.CKEDITOR_5_STORAGE_BASE_PATH), f.name)
        file_name = fs.save(file_path, f)
        url = fs.url(file_name)
        return JsonResponse({"url": url})

class EventFeed(ICalFeed):
    """
    A WRH Event Calender
    """
    product_id = '-//WRH Organization.//EN'
    # timezone = 'UTC'
    file_name = "event.ics"
    title = "WRH Events"
    description = "Public Events of WRH. Provided by https://weracehere.org/"

    def items(self):
        return Event.objects.all().order_by('-create_datetime')

    def item_title(self, item):
        return item.name

    def item_description(self, item):
        return ("http://localhost:8080" if settings.DEBUG else "https://dev2.weracehere.org" ) + "/static/vue/#/event-profile/" + str(item.id)

    def item_start_datetime(self, item):
        return item.start_date
    
    def item_end_datetime(self, item):
        return item.end_date

    def item_created(self, item):
        return item.create_datetime

    def item_updateddate(self, item):
        return item.update_datetime

    def item_location(self, item):
        return item.country

    def item_class(self, item):
        return "Public"

    def item_link(self, item):
        return item.website

    def item_guid(self, item):
        return str(item.id) + "@www.werachere.org"