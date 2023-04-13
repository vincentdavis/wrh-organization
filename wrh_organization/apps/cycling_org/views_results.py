# Utility file for race results

from datetime import date

from django.db.models import Exists, OuterRef, Q
from django.views.generic import TemplateView

from .models import Race, Event, RaceResult, RaceSeries


def events_with_race(request=None):
    """Return Events with races that have been completed."""
    limit = 100
    if not request:
        events = Event.objects.filter(Q(end_date__lte=date.today()) & Q(
            Exists(Race.objects.order_by('-start_datetime').filter(event=OuterRef('pk')))))
    else:
        Event.objects.filter(Q(end_date__lte=date.today()) & Q(
            Exists(Race.objects.order_by('-start_datetime').filter(event=OuterRef('pk')))) & Q(
            name__icontains=request.POST.get('event')))
    return events[:limit]


def races(event=None):
    """ Return races possibly filtered by Event"""
    if event:
        return Race.objects.filter(event=event).order_by('name')
    else:
        return Race.objects.all()


def race_results(race=None, event=None):
    results = RaceResult.objects.all().order_by(*['race__event__end_date', 'race', 'place'])
    q = Q()
    if event or race:
        q = Q()
        if race:
            q &= Q(race=race)
        if event:
            q &= Q(race__event=event)
        results = results.filter(q)
        return results
    else:
        return results


class RaceResults(TemplateView):
    template_name = 'BC/RaceResults.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # TODO: add pagination.
        context['EventsWith'] = events_with_race()
        context['Races'] = races()
        context['RaceResults'] = race_results()
        # .order_by(['race__event', 'place', 'finish_status'])
        # print(context['RaceResults'])
        return context

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        context['EventsWith'] = events_with_race(request=request)
        return self.render_to_response(context)


class RaceSeriesList(TemplateView):
    template_name = 'BC/RaceSeries.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['RaceSeries'] = RaceSeries.objects.all().order_by('name')
        return context
