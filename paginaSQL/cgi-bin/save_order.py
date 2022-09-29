#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cgi
import sys
from db import DB
import cgitb

cgitb.enable()
print("Content-type: text/html; charset=UTF-8")
print()
sys.stdout.reconfigure(encoding='utf-8')

db = DB('localhost', 'root', '', 'ejercicio3')
form = cgi.FieldStorage()

#Rellenar acá cosas que faltan (armar tuplas
# y mostrar mensaje de datos subidos con éxito).

data = (form['nombre'].value, form['tipo_pizza'].value,
  form['comentarios'].value, form['telefono'].value, form['direccion'].value)

db.save_order(data)

with open('templates/template.html','r', encoding="utf-8") as template:
        file = template.read()
        print(file.format('Pedido Ingresado', 
        """
        <div class="row justify-content-center  vw-100">
        <div class="alert alert-success col-6" role="alert">
            <h4 class="alert-heading">Pedido ingresado con éxito!</h4>
            <p>¡Muchas gracias por pedir tu pizza en cc5002!</p>
            <hr>
        </div>
        </div>

        """))