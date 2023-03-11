import csv
import traceback
from PIL import Image
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django_ckeditor_5.forms import UploadFileForm
from django_ckeditor_5.views import storage as ck_storage
from wrh_organization.helpers.utils import get_random_upload_path
from django.http import HttpResponse


from .validators import usac_license_on_record, usac_license_status, usac_club_status, wrh_club_status, wrh_bc_member, wrh_club_memberships

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

def validate(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES['csv_file'] # Form key
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            reader = csv.DictReader(decoded_file)
            try:
                assert "License" in reader.fieldnames
                assert "First Name" in reader.fieldnames
                assert "Last Name" in reader.fieldnames
                assert "Gender" in reader.fieldnames
                assert "Club" in reader.fieldnames
                assert "Category" in reader.fieldnames
            except AssertionError:
                return HttpResponse("Missing required field. Please check your CSV file and try again.")
            # Download CSV
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachement; filename="download.csv" '
            # Creating CSV 
            added_fields = ['WRH_USAC_LICENSE_ON_RECORD', 'WRH_USAC_LICENCE_STATUS', 'WRH_USAC_CLUB_STATUS', 
                            'WRH_USAC_CLUB_CORRECT', 'WRH_CLUB_STATUS', 'WRH_BC_MEMBER', 'WRH_CLUB_MEMBERSHIPS']
            verified = csv.DictWriter(response, fieldnames=reader.fieldnames+added_fields)
            verified.writeheader()
            for row in reader:
                row['WRH_USAC_LICENSE_ON_RECORD'] = usac_license_on_record(row['License'])
                row['WRH_USAC_LICENCE_STATUS'] = usac_license_status(row['License'])
                row['WRH_USAC_CLUB_STATUS'] = usac_club_status(row['License'], row['Club'])
                row['WRH_CLUB_STATUS'] = wrh_club_status(row['License'], row['Club'])
                row['WRH_BC_MEMBER'] = wrh_bc_member(row['License'])
                row['WRH_CLUB_MEMBERSHIPS'] = wrh_club_memberships(row['License'])
                verified.writerow(row)
        return response
    else:
        # GET method - render upload form
        form = UploadFileForm()
    return render(request, 'validate.html', {'form': form})
