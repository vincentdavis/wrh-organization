from .rest_api import router

app_name = 'wrh_account'

urlpatterns = [
]

urlpatterns += router.rest_router.urls
