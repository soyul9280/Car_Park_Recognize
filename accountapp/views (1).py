from django.shortcuts import render
from .models import MyModel
from django.http import JsonResponse

def hello(request):
    data = MyModel.objects.all()
    return render(request, 'accountapp/hello.html', {'data': data})

def hello(request):
    data = MyModel.objects.all()
    normal_count = data.filter(val=0).count()
    return render(request, 'accountapp/hello.html', {'data': data, 'normal_count': normal_count})


def main(request):
    return render(request, 'accountapp/main.html')

def page3(request):
    return render(request, 'accountapp/page3.html')
