import csv
import io
import json
import traceback
from datetime import datetime

from django.contrib import admin
from django.forms import forms
from django.shortcuts import redirect, render
from django.urls import path

from . import models
from .models import USACRiderLicense


def import_rider_license_row(row, required_fields, date_format='%m/%d/%Y'):
    row = {k: (v or None) for k, v in row.items()}
    if not row.get('license_number'):
        return
    data_hash = USACRiderLicense.hashify(row)
    if USACRiderLicense.objects.filter(data_hash=data_hash).exists():
        return
    db_cols = {c: row.get(c) for c in required_fields}
    if db_cols['birth_date']:
        db_cols['birth_date'] = datetime.strptime(db_cols['birth_date'], date_format)
    if db_cols['license_expiration']:
        db_cols['license_expiration'] = datetime.strptime(db_cols['license_expiration'], date_format)
    if db_cols['race_age']:
        db_cols['race_age'] = int(db_cols['race_age'])
    db_cols['data_hash'] = data_hash
    db_cols['data'] = row

    return USACRiderLicense.objects.create(**db_cols)


def import_rider_license_from_csv(csv_file, date_format='%m/%d/%Y'):
    reader = csv.DictReader(csv_file)
    field_names = reader.fieldnames
    for i in range(len(field_names)):
        f = field_names[i].lower().replace('-', ' ')
        field_names[i] = '_'.join(f.split())
        if field_names[i] == 'license_#':
            field_names[i] = 'license_number'
        if field_names[i] == 'birthdate':
            field_names[i] = 'birth_date'

    required_fields = {
        'license_number', 'first_name', 'last_name', 'birth_date', 'race_age', 'race_gender', 'sex',
        'license_expiration', 'license_type', 'license_status', 'local_association'
    }
    missed_fields = required_fields - set(field_names)
    if missed_fields:
        raise Exception(f'Invalid csv file. missed this fields: {missed_fields}')
    for row in reader:
        print(f'Importing row #{reader.line_num} ... ', end='')
        try:
            obj = import_rider_license_row(row, required_fields, date_format=date_format)
            print('[OK]' if obj else '[SKIP]')
        except Exception:
            print('[FAIL]')
            traceback.print_exc()


class CsvImportForm(forms.Form):
    csv_file = forms.FileField()


class USACRiderLicenseAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'license_number', 'license_type', 'license_status',
                    'license_expiration')
    list_filter = ('license_type', 'license_status')
    search_fields = ('first_name', 'last_name', 'license_number')
    change_list_template = "admin/usacycling/riderlicense_changelist.html"

    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path('import-csv/', self.import_csv),
        ]
        return my_urls + urls

    def import_csv(self, request):
        if request.method == "POST":
            csv_file = request.FILES["csv_file"]
            decoded_file = io.StringIO(csv_file.read().decode())
            import_rider_license_from_csv(decoded_file)
            self.message_user(request, "Your csv file has been imported")
            return redirect("..")
        form = CsvImportForm()
        payload = {"form": form}
        return render(
            request, "admin/csv_form.html", payload
        )


admin.site.register(models.USACRiderLicense, USACRiderLicenseAdmin)
