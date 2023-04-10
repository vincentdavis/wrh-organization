from django.contrib import messages
from django.shortcuts import get_object_or_404, render

from .models import Organization
from .forms import JoinClubForm

def join_club(request, pk=None):
    if request.method == 'POST':
        form = JoinClubForm(request.POST)
        if form.is_valid():
            # form.save()
            print(form)
            messages.success(request, 'TEST: You have successfully joined the club.')
        else:
            messages.error(request, 'Please correct the error below.')
    elif request.method == 'GET':
        if id:
            club = get_object_or_404(Organization, id=pk)
            context = {'Club': club}
            print(club.waiver_text)
            context['form'] = JoinClubForm(initial={'organization': club, 'member': request.user.member})
            print(context)
            return render(request, 'BCforms/JoinClub.html', context)
