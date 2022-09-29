#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cgitb
import sys

from db import DB

cgitb.enable()
print("Content-type: text/html; charset=UTF-8")
print()
sys.stdout.reconfigure(encoding='utf-8')
utf8stdout = open(1, 'w', encoding='utf-8', closefd=False)

#Rellenar acá con datos que faltan.
db = DB('localhost', 'root', '', 'ejercicio3')
data = db.get_data()

tabla = """
            <div class="container ">
            <table class="table">
        <thead>
        <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo Pizza</th>
        <th scope="col">Comentarios</th>
        <th scope="col">Teléfono</th>
        <th scope="col">Dirección</th>
        </tr>
        </thead>
        <tbody>
        """
for p in data:
    tabla+=f""" 
          <tr>
        <td>{data[0]}</td>
        <td>{data[1]}</td>
        <td>{data[2]}</td>
        <td>{data[3]}</td>
        <td>{data[4]}</td>
        </tr>
        """


tabla+="""
    </tbody>
    </table>
    </div> """

with open('templates/template.html','r', encoding="utf-8") as template:
    file = template.read()
    print(file.format('Listado de pedidos pedidos', tabla), file=utf8stdout)