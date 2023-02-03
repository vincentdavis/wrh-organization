import requests
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.constant_contact.permission import ConstantContentLoginRequired
from apps.cycling_org.models import OrganizationMember


class CCSignOutView(APIView):
    permission_classes = [ConstantContentLoginRequired]

    def get(self, request, *args, **kwargs):
        request.session.pop('cc_token', None)
        return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)


class CCStatusView(APIView):
    permission_classes = [ConstantContentLoginRequired]

    def get(self, request, *args, **kwargs):
        return Response({"is_singin": True}, status=status.HTTP_200_OK)


class CCContactListView(APIView):
    permission_classes = [ConstantContentLoginRequired]

    def get(self, request, *args, **kwargs):
        url = f"https://api.cc.email/v3/contact_lists?include_count=true&include_membership_count=all"
        res = requests.get(url, headers={
            'Authorization': f"Bearer {request.session.get('cc_token')}"
        })
        return Response(res.json())


class CCContactListDetailView(APIView):
    permission_classes = [ConstantContentLoginRequired]

    def cc_member_match(self, cc_list, org):
        # Checking if CC user exists on ORG member list
        for cc_user in cc_list.get('contacts', []):
            cc_user['match_type'] = 'Not Matched'
            email_address = cc_user.get('email_address').get('address', None)
            if not email_address:
                continue
            om = OrganizationMember.objects.filter(organization_id=org, member__email=email_address).first()
            member = om and om.member
            if member:
                cc_user['match_type'] = 'Matched'
                cc_user['member_name'] = str(member)
                cc_user['member_email'] = member.email

        return cc_list

    def get(self, request, list_id, *args, **kwargs):
        url = f"https://api.cc.email/v3/contacts?lists={list_id}"
        res = requests.get(url, headers={
            'Authorization': f"Bearer {request.session.get('cc_token')}"
        })
        records = res.json()
        try:
            org_id = int(request.query_params.get("organization", None))
        except (ValueError, TypeError):
            org_id = None
        if org_id:
            records = self.cc_member_match(records, org_id)
        return Response(records)
