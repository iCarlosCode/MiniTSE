from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse
from json import dumps
# Create your views here.
candidatos = {
    13: {"nome":"Lula",
    "partido": "PT",
    "foto":"",
    "votos": 0},
    38: {"nome":"Bolsonaro",
    "partido": "PL",
    "foto":"",
    "votos": 0},
}

def index(request):
    return HttpResponse("Ola")
def teste1(request):
    return HttpResponse("Teste")

def checar(request, numero):
    return HttpResponse(dumps(candidatos.get(numero)))

@csrf_exempt
def votar(request, numero):
    candidato = candidatos.get(numero)
    if request.method == 'POST' and candidato != None:
        candidatos[numero]['votos'] += 1
    return HttpResponse(f"Sucesso, {candidatos.get(numero)}")

def apurar(request):
    return HttpResponse(candidatos.__str__())