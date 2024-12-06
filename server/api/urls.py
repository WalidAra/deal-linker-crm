from django.urls import include, path

urlpatterns = [
    path('auth/', include('api.auth.urls')),  # Routes to the auth app
    path('crm/', include('api.crm.urls')),    # Routes to the crm app
    path('link/', include('api.link.urls')),    # Routes to the crm app
]
