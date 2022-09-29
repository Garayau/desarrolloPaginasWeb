#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi 
import cgitb
import sys

cgitb.enable()
print("Content-type: text/html; charset=UTF-8")
sys.stdout.reconfigure(encoding='utf-8')
print()

form = cgi.FieldStorage()

nombre = form.getvalue('nombre')
pizza = form.getfirst('pizza')
comentarios = form.getfirst('comentarios')
telefono = form .getfirst('telefono')
direccion = form.getvalue('direccion')

head = """

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- CSS bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" crossorigin="anonymous">

    <!-- JS bootstrap -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"  crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
    
</head>
"""

inicio_body = """


<body>

<section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">Datos del formulario</h1>
        <p class="lead ">Acá se muestran los datos que vienen desde el formulario :)</p>
    </div>
</section>

"""


body = """

    <div class="container p-3 my-3 border bg-light">
        <div class="mb-3 mt-3">
            <label for="nombre" class="form-label">El nombre fue: {}</label>
        </div>
        <div class="mb-3 mt-3">
            <label for="email" class="form-label">La pizza fue: {}</label>
        </div>
        <div class="mb-3">
            <label for="comentarios">Los comentarios fueron: {}</label>                  
        </div>
        <div class="mb-3 mt-3">
            <label for="email" class="form-label">El teléfono entregado fue: {}</label>
        </div>
        <div class="mb-3 mt-3">
            <label for="email" class="form-label">La dirección entregada fue: {}</label>
        </div>
    </div>

</body>
""".format(nombre,pizza,comentarios,telefono,direccion)

print(head+inicio_body+body)
