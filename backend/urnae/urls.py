from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("checar/<int:numero>", views.checar, name="checar"),
    path("votar/<int:numero>", views.votar, name="votar"),
    path("apurar", views.apurar, name="apurar")
]