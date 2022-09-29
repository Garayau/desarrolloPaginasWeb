function validacion(){
    var errores = '';
    var validacion = true;
    
    var nombre = document.getElementById('username').value;
    var pizzaChoice = document.getElementById('pizza').value;
    var comment = document.getElementById('comments').value;
    var phone = document.getElementById('phone').value;
    var adress = document.getElementById('adress').value;
    var caja_errores = document.getElementById('errorContainer');

    if (nombre.length < 5){
        errores += '<p> El nombre es demasiado corto. </p>'
        validacion = false;
        document.getElementById('username').style.borderColor = "red"
    } else document.getElementById('username').style.borderColor = "#ced4da"

    if (nombre.length > 100){
        errores += '<p> El nombre es demasiado largo. </p>'
        validacion = false;
        document.getElementById('username').style.borderColor = "red"
    }
    
    if (!(["italiana", "napolitana", "hawaiana"].includes(pizzaChoice))){   // if pizzaChoice is not in list
                                                                            //return false
        errores += '<p> Tiene que elegir una pizza. </p>'
        validacion = false;
        document.getElementById('pizza').style.borderColor = "red"
    } else document.getElementById('pizza').style.borderColor = "#ced4da"

    if (comment.length > 1000){
        errores += '<p> Su comentario es demasiado largo. </p>'
        validacion = false;
        document.getElementById('comments').style.borderColor = "red"
    } else document.getElementById('comments').style.borderColor = "#ced4da"

    if (phone.charAt(0) != "+" || isNaN(phone) || phone.length <= 1){   //number has to be ex: +1
                                                            // has to start with +, be numbers and
        errores += '<p> Ingrese un número de teléfono válido. </p>'
        validacion = false;
        document.getElementById('phone').style.borderColor = "red"
    } else document.getElementById('phone').style.borderColor = "#ced4da"

    if (adress.length < 5){
        errores += '<p> La dirección es demasiado corta. </p>'
        validacion = false;
        document.getElementById('adress').style.borderColor = "red"
    } else document.getElementById('adress').style.borderColor = "#ced4da"

    if (adress.length > 100){
        errores += '<p> La dirección es demasiado larga. </p>'
        validacion = false;
        document.getElementById('adress').style.borderColor = "red"
    }

    caja_errores.innerHTML = errores;

    return validacion
}