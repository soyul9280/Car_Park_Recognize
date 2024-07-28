#Django의 클래스 기반 뷰 활용
from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'home.html'
    
