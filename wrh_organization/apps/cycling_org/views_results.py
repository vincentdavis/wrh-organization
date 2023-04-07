# Utility file for race results

from .models import Race, Event, RaceResult
from django.db.models import Exists, OuterRef
from django.db.models import Q

def events_with_race(request=None):
    if not request:
        return Event.objects.filter(Exists(Race.objects.order_by('-start_datetime').filter(event=OuterRef('pk'))))
    else:
        return Event.objects.filter(Q(Exists(Race.objects.order_by('-start_datetime').filter(event=OuterRef('pk')))) & Q(name__icontains=request.POST.get('event')))
    
def races():
    return Race.objects.all()
    
def race_results():
    return RaceResult.objects.all().order_by(*['race__event__end_date', 'race', 'place'])[:100]
    