import requests
from django.http import HttpResponseRedirect, JsonResponse, HttpResponse
# Create your views here.
from django.conf import settings
import base64

from django.shortcuts import redirect
from rest_framework.response import Response

from wrh_organization.helpers.utils import ex_reverse


def authorization_request(request):
    # Create an Authorization Request
    redirect_uri = ex_reverse('constant_content_callback', request=request, scheme='auto')
    base_url = f"https://authz.constantcontact.com/oauth2/default/v1/authorize?client_id={settings.CC_CLIENT_ID}&redirect_uri={redirect_uri}&response_type=code&scope=contact_data%20campaign_data%20offline_access&state=235o250eddsdff"
    return HttpResponseRedirect(base_url)


def callback(request):
    message_bytes = f"{str(settings.CC_CLIENT_ID)}:{str(settings.CC_CLIENT_SECRET)}".encode('ascii')
    base64_bytes = base64.b64encode(message_bytes)
    base64_string = base64_bytes.decode("ascii")
    code = request.GET.get('code', None)
    redirect_uri = ex_reverse('constant_content_callback', request=request, scheme='auto')

    if code:
        url = f"https://authz.constantcontact.com/oauth2/default/v1/token"
        res = requests.post(url, data={
            'code': code,
            'redirect_uri': redirect_uri,
            'grant_type': 'authorization_code'
        }, headers={'Authorization': f"Basic {base64_string}"})
        request.session['cc_token'] = res.json().get('access_token')
        return HttpResponseRedirect("/#/dashboard/member-profile")
