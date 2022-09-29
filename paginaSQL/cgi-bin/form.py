#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi 
import cgitb
from codecs import utf_8_decode
from encodings import utf_8;
import sys
cgitb.enable()

print("Content-type: text/html; charset=UTF-8")
print()
sys.stdout.reconfigure(encoding='utf-8')

with open('templates/template.html','r', encoding="utf-8") as template:
    file = template.read()
    print(file.format('Pide tu pizza', """
        <div class="d-flex align-items-center ">
        <div class="container p-3 my-3 border bg-light">
            <form action="save_order.py" method="POST" enctype="multipart/form-data">
                <div class="mb-3 mt-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Introduce tu nombre" name="nombre">
                </div>
                <div class="mb-3 mt-3">
                <label for="tipo" class="form-label">Tipo Pizza:</label>
                <select class="form-control" id="exampleFormControlSelect1" name='pizza'>
                    <option selected="">Elija ...</option>
                    <option>Italiana</option>
                    <option>Napolitana</option>
                    <option>Hawaiana</option>
                </select>
                </div>
                <div class="mb-3">
                    <label for="comentarios">Comentarios:</label>
                    <textarea type="text" class="form-control" rows="5" id="comentarios" name="comentarios"></textarea>
                </div>
                <div class="mb-3 mt-3">
                    <label for="telefono" class="form-label">Teléfono:</label>
                    <input type="text" class="form-control" id="telefono" placeholder="Introduce tu telefono" name="telefono">
                </div>
                <div class="mb-3 mt-3">
                    <label for="direccion" class="form-label">Dirección:</label>
                    <input type="text" class="form-control" id="telefono" placeholder="Introduce tu dirección" name="direccion">
                </div>
                <br><hr>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Enviar</button>
            </form>
        </div>
    </div>
    """))
