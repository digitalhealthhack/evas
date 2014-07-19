from django.conf.urls import include, url
from django.contrib import admin


admin.autodiscover()


urlpatterns = [
    url(
        regex=r'^api/',
        view=include(
            'user_management.api.urls',
            namespace='user_management_api',
        ),
    ),
    url(r'^admin/', include(admin.site.urls)),
]
