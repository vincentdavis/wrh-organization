import requests
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.constant_contact.permission import ConstantContentLoginRequired


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

    def get(self, request, list_id, *args, **kwargs):
        url = f"https://api.cc.email/v3/contacts?lists={list_id}"
        res = requests.get(url, headers={
            'Authorization': f"Bearer {request.session.get('cc_token')}"
        })
        return JsonResponse(res.json())
