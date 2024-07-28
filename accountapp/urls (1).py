from django.urls import path
from .views import hello
from accountapp import views
app_name = "accountapp"

urlpatterns = [
   path('t/', hello, name="hello"),
   path('', views.main, name='main'),
   path('page3/', views.page3, name='page3'),
]



