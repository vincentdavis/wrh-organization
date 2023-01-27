from rest_framework import permissions


class ConstantContentLoginRequired(permissions.BasePermission):
    message = 'Authentication Failed with CC'
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.session.get('cc_token'))

