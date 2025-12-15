from . import views
from django.urls import path

urlpatterns = [
    path('all/', views.all),
    path('add/', views.add),
    path('delete/', views.delete),
    path('change/', views.change),
    path('getone/ <int:ID>', views.getOne)
]