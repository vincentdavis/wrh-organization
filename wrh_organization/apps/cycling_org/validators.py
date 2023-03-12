from django.core.exceptions import ObjectDoesNotExist

from .models import Member, OrganizationMember
from ..usacycling.models import USACRiderLicense


def usac_license_on_record(license_number: str) -> str:
    """Verifiy the USAC license number is on record at WRH and that it has been verified."""
    try:
        if license_number == 'ONE DAY':
            return 'ONE DAY'
        l = Member.objects.get(usac_license_number=license_number)
    except ObjectDoesNotExist:
        return 'FALSE'
    except ValueError:
        return 'ERROR'
    if l.usac_license_number_verified:
        return 'TRUE'
    else:
        return 'NOT_VERIFIED'


def usac_license_status(license_number: str) -> tuple[str, str | list]:
    """Get status of USAC license number from USAC records (model)"""
    try:
        if license_number == 'ONE DAY':
            return 'ONE DAY', ''
        licenses = USACRiderLicense.objects.filter(license_number=license_number)
        if not licenses:
            return 'NOT FOUND', ''
        if all([l.license_status == 'Valid' for l in licenses]):
            status = 'VALID'
        else:
            status = 'FALSE'
        types = [(l.license_status, l.license_type) for l in licenses]
        return status, types
    except ValueError:
        return 'ERROR', 'ERROR'


def usac_club_status(license_number: str, club: str) -> str:
    """Get status of persons USAC club from USAC records (model)"""
    try:
        if license_number == 'ONE DAY':
            return 'ONE DAY'
        if club == '':
            return 'NO CLUB'
        licenses = USACRiderLicense.objects.filter(license_number=license_number)
        if not licenses:
            return 'LICENSE NOT FOUND'
        if club in [l.Club for l in licenses]:
            return 'VALID'
        else:
            return 'INVALID'
    except:
        return 'ERROR'


def wrh_club_status(license_number: str, club: str) -> str:
    """Get status of persons WRH club from WRH records (model)"""
    try:
        if license_number == 'ONE DAY':
            return 'ONE DAY'
        if club == '':
            return 'NO CLUB'
        m = Member.objects.get(usac_license_number=license_number)
        clubs = OrganizationMember.objects.filter(member=m)
        if clubs:
            if club in [c.organization.name for c in clubs]:
                return 'VALID'
            else:
                return 'INVALID'
    except ObjectDoesNotExist:
        return 'LICENSE NOT FOUND'
    except:
        return 'ERROR'


def wrh_bc_member(license_number: str) -> str:
    """Get status of persons WRH BC from WRH records (model)"""
    try:
        m = Member.objects.get(usac_license_number=license_number)
        clubs = OrganizationMember.objects.filter(member=m)
        if 'Bicycle Colorado' in [c.organization.name for c in clubs]:
            return 'True'
        else:
            return 'False'
    except ObjectDoesNotExist:
        return 'LICENSE NOT FOUND'
    except:
        return 'ERROR'


def wrh_club_memberships(license_number: str) -> str:
    try:
        m = Member.objects.get(usac_license_number=license_number)
        clubs = OrganizationMember.objects.filter(member=m)
        return [c.organization.name for c in clubs]
    except ObjectDoesNotExist:
        return ''
    except:
        return 'ERROR'
