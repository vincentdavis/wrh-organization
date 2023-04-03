from django import forms
from django.forms import ModelForm
from .models import Event
class UploadValidateFile(forms.Form):
    validate_file = forms.FileField()
    
class EventPublicSubmitForm(ModelForm):
    class Meta:
        model = Event
        fields = ['name', 'description', 'start_date', 'end_date', 'organizer_email', 'country', 'city', 'state', 
                  'website', 'registration_website', 'logo', 'tags', 'more_data', 'organization', 'create_by', 'permit_no', 'is_usac_permitted']
        widgets = {
            'start_date': forms.DateInput(attrs={'type': 'date'}),
        }
        labels = {
            'name': 'Event Name',
            'start date': 'Start Date',
            'end_date': 'End Date',
            'description': 'Description',
            'organizer_email': 'Event Email',
            'website': 'Event Website',
            'registration_website': 'Registration Website',
            'is_usac_permitted': 'Is USAC Permitted',
            'permit_no': 'Permit Number',
            'city': 'City',
            'state': 'State',
            'country': 'Country',
        }
        help_texts = {
            'name': 'Enter the name of the event.',
            'start_date': 'Enter the Start date of the event.',
            'end_date': 'Enter the end date of the event.',
            'description': 'Enter a short description of the event.',
            'organizer_email': 'Enter the email of the event organizer.',
            'website': 'Enter the website of the event.',
            'registration_website': 'Enter the registration website of the event.',
            'is_usac_permitted': 'Is the event USAC permitted?',
            'permit_no': 'Enter the permit number of the event.',
            'city': 'Enter the nearest city of the start.',
            'state': 'Enter the state of the start.',
            'country': 'Enter the country of the start.',
            
            
            
        }
        error_messages = {
            'name': {
                'max_length': 'This event name is too long.',
            },
        }
    