import mysql.connector
import hashlib
import sys

class DB:
    def __init__(self, host, user, password, database):
        self.db = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.db.cursor()

    def save_order(self, data):
        
        try:
            sql ='''
                INSERT INTO pizza (nombre, tipo_pizza, comentarios, telefono, direccion) 
                VALUES (%s, %s, %s, %s, %s)
                '''
            self.cursor.execute(sql, data)  # ejecuto la consulta
            self.db.commit()                # modifico la base de datos
            
        except:
            print("ERROR AL GUARDAR EN LA BASE DE DATOS")
            sys.exit()

    def get_data(self):
        
        sql = '''
            SELECT * FROM pizza
            '''
        self.cursor.execute(sql)
        return self.cursor.fetchall()