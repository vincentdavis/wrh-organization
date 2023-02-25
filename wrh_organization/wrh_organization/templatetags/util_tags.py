from django import template
from django.conf import settings
from django.templatetags.static import static
from django.urls import reverse
from django.utils.safestring import mark_safe

register = template.Library()


@register.simple_tag(takes_context=True)
def ex_url(context, name, *args, **kwargs):
    """ External url tag """
    hostname = context.get('hostname') or kwargs.pop('_hostname', None)
    scheme = kwargs.pop('scheme', None)
    request = context.get('request')
    if kwargs.pop('drf', None):
        VERSION_PARAM = settings.REST_FRAMEWORK.get('VERSION_PARAM', 'version')
        DEFAULT_VERSION = settings.REST_FRAMEWORK.get('DEFAULT_VERSION', 'v1')
        kwargs[VERSION_PARAM] = DEFAULT_VERSION

    if not hostname:
        hostname = request and request.get_host()
    if not hostname:
        hostname = settings.HOSTNAME

    url = ''
    if name:
        url = reverse(name, args=args, kwargs=kwargs)

    if scheme == 'auto' and request:
        scheme = '{}://'.format(request.scheme)
    else:
        scheme = '{}://'.format(scheme) if (scheme and scheme != 'auto') else ''

    return '{0}{1}{2}'.format(scheme, hostname, url)


@register.filter
def yesnoicon(value):
    icon = static(f'admin/img/icon-{"yes" if value else "no"}.svg')
    html = f'<img src="{icon}" alt="{value}">'
    return mark_safe(html)
