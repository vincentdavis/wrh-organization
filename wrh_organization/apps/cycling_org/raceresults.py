# Utility file for race results

from .models import Race, Event
from django.db.models import Exists, OuterRef
from django.db.models import Q

def events_with_race(request=None):
    if not request:
        return Event.objects.filter(Exists(Race.objects.filter(event=OuterRef('pk')))).order_by('start_date')
    else:
        return Event.objects.filter(Q(Exists(Race.objects.filter(event=OuterRef('pk')))) & Q(name__icontains=request.POST.get('event')))
    