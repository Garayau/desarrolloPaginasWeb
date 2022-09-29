const paisCapital = new Map();
/**
 * Function that adds all paises and ciudades
 * to paisCapital map().
 */
function setPaisesCapitales(){
    paisCapital.set('Anguila', 'The Valley');
    paisCapital.set('Antigua y Barbuda', 'Saint John’s');
    paisCapital.set('Argentina', 'Buenos Aires');
    paisCapital.set('Aruba', 'Oranjestad');
    paisCapital.set('Bahamas', 'Nassau');
    paisCapital.set('Barbados', 'Bridgetown');
    paisCapital.set('Belice', 'Belmopan');
    paisCapital.set('Bermudas', 'Hamilton');
    paisCapital.set('Bolivia', 'Sucre');
    paisCapital.set('Brasil', 'Brasília');
    paisCapital.set('Canadá', 'Ottawa');
    paisCapital.set('Chile', 'Santiago');
    paisCapital.set('Colombia', 'Bogotá');
    paisCapital.set('Costa Rica', 'San José');
    paisCapital.set('Cuba', 'la Habana');
    paisCapital.set('Curaçao', 'Willemstad');
    paisCapital.set('Dominica', 'Roseau');
    paisCapital.set('Ecuador', 'Quito');
    paisCapital.set('El Salvador', 'San Salvador');
    paisCapital.set('Estados Unidos', 'Washington, D.C.');
    paisCapital.set('Georgia del Sur y las Islas Sandwich del Sur', 'King Edward Point');
    paisCapital.set('Granada', "Saint George's");
    paisCapital.set('Groenlandia', 'Nuuk');
    paisCapital.set('Guadalupe', 'Basse-Terre');
    paisCapital.set('Guatemala', 'Ciudad de Guatemala');
    paisCapital.set('Guayana', 'Georgetown');
    paisCapital.set('Guayana Francesa', 'Cayenne');
    paisCapital.set('Haití', 'Port-au-Prince');
    paisCapital.set('Honduras', 'Tegucigalpa');
    paisCapital.set('Isla de San Martín', 'Marigot');
    paisCapital.set('Islas Caimán', 'George Town');
    paisCapital.set('Islas Malvinas', 'Stanley');
    paisCapital.set('Islas Turcas y Caicos', 'Cockburn Town');
    paisCapital.set('Islas Vírgenes (UK)', 'Road Town');
    paisCapital.set('Islas Vírgenes Americanas', 'Charlotte Amalie');
    paisCapital.set('Jamaica', 'Kingston');
    paisCapital.set('Martinica', 'Fort-de-France');
    paisCapital.set('México', 'Ciudad de México');
    paisCapital.set('Montserrat', 'Brades');
    paisCapital.set('Nicaragua', 'Managua');
    paisCapital.set('Panamá', 'Ciudad de Panama');
    paisCapital.set('Paraguay', 'Asunción');
    paisCapital.set('Perú', 'Lima');
    paisCapital.set('Puerto Rico', 'San Juan');
    paisCapital.set('República Dominicana', 'Santo Domingo');
    paisCapital.set('San Bartolomé', 'Gustavia');
    paisCapital.set('San Cristóbal y Nieves', 'Basseterre');
    paisCapital.set('San Pedro y Miquelón', 'Saint-Pierre');
    paisCapital.set('San Vicente y las Granadinas', 'Kingstown');
    paisCapital.set('Santa Lucía', 'Castries');
    paisCapital.set('Sint Maarten', 'Philipsburg');
    paisCapital.set('Surinam', 'Paramaribo');
    paisCapital.set('Trinidad y Tobago', 'Port-of-Spain');
    paisCapital.set('Uruguay', 'Montevideo');
    paisCapital.set('Venezuela', 'Caracas');
    paisCapital.set('Albania', 'Tirana');
    paisCapital.set('Alemania', 'Berlín');
    paisCapital.set('Andorra', 'Andorra la Vella');
    paisCapital.set('Austria', 'Viena');
    paisCapital.set('Bailía de Guernsey', 'Saint Peter Port');
    paisCapital.set('Belarús', 'Minsk');
    paisCapital.set('Bélgica', 'Bruselas');
    paisCapital.set('Bosnia y Hercegovina', 'Sarajevo');
    paisCapital.set('Bulgaria', 'Sofía');
    paisCapital.set('Chequia', 'Praga');
    paisCapital.set('Ciudad del Vaticano', 'Ciudad del Vaticano');
    paisCapital.set('Croacia', 'Zagreb');
    paisCapital.set('Dinamarca', 'Copenhague');
    paisCapital.set('Eslovaquia', 'Bratislava');
    paisCapital.set('Eslovenia', 'Ljubljana');
    paisCapital.set('España', 'Madrid');
    paisCapital.set('Estonia', 'Tallinn');
    paisCapital.set('Finlandia', 'Helsinki');
    paisCapital.set('Francia', 'París');
    paisCapital.set('Gibraltar', 'Gibraltar');
    paisCapital.set('Grecia', 'Athens');
    paisCapital.set('Hungría', 'Budapest');
    paisCapital.set('Irlanda', 'Dublin');
    paisCapital.set('Isla de Man', 'Douglas');
    paisCapital.set('Islandia', 'Reykjavík');
    paisCapital.set('Islas Åland', 'Mariehamn');
    paisCapital.set('Islas Feroe', 'Tórshavn');
    paisCapital.set('Italia', 'Roma');
    paisCapital.set('Jersey', 'Saint Helier');
    paisCapital.set('Kosovo', 'Pristina');
    paisCapital.set('Letonia', 'Riga');
    paisCapital.set('Liechtenstein', 'Vaduz');
    paisCapital.set('Lituania', 'Vilnius');
    paisCapital.set('Luxemburgo', 'Luxembourg');
    paisCapital.set('Macedonia del Norte', 'Skopje');
    paisCapital.set('Malta', 'Valletta');
    paisCapital.set('Moldavia', 'Chisinau');
    paisCapital.set('Montenegro', 'Podgorica');
    paisCapital.set('Noruega', 'Oslo');
    paisCapital.set('Países Bajos', 'Ámsterdam');
    paisCapital.set('Polonia', 'Varsovia');
    paisCapital.set('Portugal', 'Lisbon');
    paisCapital.set('Principado de Mónaco', 'Monaco');
    paisCapital.set('Reino Unido', 'Londres');
    paisCapital.set('Rumania', 'Bucarest');
    paisCapital.set('Rusia', 'Moscú');
    paisCapital.set('San Marino', 'San Marino');
    paisCapital.set('Serbia', 'Belgrado');
    paisCapital.set('Suecia', 'Estocolmo');
    paisCapital.set('Suiza', 'Bern');
    paisCapital.set('Svalbard y Jan Mayen', 'Longyearbyen');
    paisCapital.set('Ucrania', 'Kiev');
    paisCapital.set('Afganistán', 'Kabul');
    paisCapital.set('Arabia Saudita', 'Riyadh');
    paisCapital.set('Armenia', 'Ereván');
    paisCapital.set('Azerbaiyán', 'Baku');
    paisCapital.set('Bahrein', 'Manama');
    paisCapital.set('Bangladesh', 'Dhaka');
    paisCapital.set('Brunéi', 'Bandar Seri Begawan');
    paisCapital.set('Bután', 'Thimphu');
    paisCapital.set('Cambodia', 'Phnom Penh');
    paisCapital.set('Catar', 'Doha');
    paisCapital.set('China', 'Pekín');
    paisCapital.set('Chipre', 'Nicosia');
    paisCapital.set('Corea del Norte', 'Pyongyang');
    paisCapital.set('Corea del Sur', 'Seúl');
    paisCapital.set('Emiratos Árabes Unidos', 'Abu Dhabi');
    paisCapital.set('Filipinas', 'Manila');
    paisCapital.set('Georgia', 'Tiflis');
    paisCapital.set('Hong Kong', 'Hong Kong');
    paisCapital.set('India', 'New Delhi');
    paisCapital.set('Indonesia', 'Jacarta');
    paisCapital.set('Irán', 'Teherán');
    paisCapital.set('Iraq', 'Bagdad');
    paisCapital.set('Israel', 'Jerusalén');
    paisCapital.set('Japón', 'Tokio');
    paisCapital.set('Jordania', 'Amman');
    paisCapital.set('Kazajstán', 'Nursultan');
    paisCapital.set('Kirguistán', 'Bishkek');
    paisCapital.set('Kuwait', 'Ciudad de Kuwait');
    paisCapital.set('Laos', 'Vientiane');
    paisCapital.set('Líbano', 'Beirut');
    paisCapital.set('Macao', 'Concelho de Macao');
    paisCapital.set('Malasia', 'Kuala Lumpur');
    paisCapital.set('Maldivas', 'Malé');
    paisCapital.set('Mongolia', 'Ulaanbaatar');
    paisCapital.set('Myanmar', 'Nay Pyi Taw');
    paisCapital.set('Nepal', 'Kathmandu');
    paisCapital.set('Omán', 'Muscat');
    paisCapital.set('Pakistán', 'Islamabad');
    paisCapital.set('Palestina', 'Ramallah');
    paisCapital.set('Singapur', 'Singapur');
    paisCapital.set('Siria', 'Damasco');
    paisCapital.set('Sri Lanka', 'Colombo');
    paisCapital.set('Tailandia', 'Bangkok');
    paisCapital.set('Taiwán', 'Taipei');
    paisCapital.set('Tayikistán', 'Dushanbe');
    paisCapital.set('Timor Oriental', 'Dili');
    paisCapital.set('Turkmenistán', 'Ashgabat');
    paisCapital.set('Turquía', 'Ankara');
    paisCapital.set('Uzbekistán', 'Tashkent');
    paisCapital.set('Vietnam', 'Hanoi');
    paisCapital.set('Yemen', 'Sanaa');
    paisCapital.set('Australia', 'Canberra');
    paisCapital.set('Isla de Navidad', 'Flying Fish Cove');
    paisCapital.set('Isla Norfolk', 'Kingston');
    paisCapital.set('Islas Cocos', 'West Island');
    paisCapital.set('Nueva Zelandia', 'Wellington');
    paisCapital.set('Fiji', 'Suva');
    paisCapital.set('Guam', 'Hagåtña');
    paisCapital.set('Islas Cook', 'Avarua');
    paisCapital.set('Islas Marianas del Norte', 'Saipan');
    paisCapital.set('Islas Marshall', 'Majuro');
    paisCapital.set('Islas Pitcairn', 'Adamstown');
    paisCapital.set('Islas Salomón', 'Honiara');
    paisCapital.set('Kiribati', 'Tarawa');
    paisCapital.set('Nauru', 'Yaren');
    paisCapital.set('Niue', 'Alofi');
    paisCapital.set('Nueva Caledonia', 'Nouméa');
    paisCapital.set('Papúa Nueva Guinea', 'Port Moresby');
    paisCapital.set('Polinesia Francesa', 'Papeete');
    paisCapital.set('Samoa', 'Apia');
    paisCapital.set('Samoa Americana', 'Pago Pago');
    paisCapital.set('Tonga', 'Nuku‘alofa');
    paisCapital.set('Tuvalu', 'Funafuti');
    paisCapital.set('Vanuatu', 'Port-Vila');
    paisCapital.set('Wallis y Futuna', 'Mata-Utu');
    paisCapital.set('Angola', 'Luanda');
    paisCapital.set('Argelia', 'Argel');
    paisCapital.set('Benín', 'Porto-Novo');
    paisCapital.set('Botsuana', 'Gaborone');
    paisCapital.set('Burkina Faso', 'Ouagadougou');
    paisCapital.set('Burundi', 'Bujumbura');
    paisCapital.set('Cabo Verde', 'Praia');
    paisCapital.set('Camerún', 'Yaundé');
    paisCapital.set('Chad', "N'Djamena");
    paisCapital.set('Comores', 'Moroni');
    paisCapital.set('Congo', 'Brazzaville');
    paisCapital.set('Costa de Marfil', 'Yamoussoukro');
    paisCapital.set('Egipto', 'Cairo');
    paisCapital.set('Eritrea', 'Asmara');
    paisCapital.set('Esuatini', 'Mbabane');
    paisCapital.set('Etiopía', 'Addis Ababa');
    paisCapital.set('Gabón', 'Libreville');
    paisCapital.set('Gambia', 'Banjul');
    paisCapital.set('Ghana', 'Accra');
    paisCapital.set('Guinea', 'Conakry');
    paisCapital.set('Guinea Ecuatorial', 'Malabo');
    paisCapital.set('Guinea-Bissau', 'Bissau');
    paisCapital.set('Isla Mauricio', 'Port Louis');
    paisCapital.set('Kenia', 'Nairobi');
    paisCapital.set('Lesotho', 'Maseru');
    paisCapital.set('Liberia', 'Monrovia');
    paisCapital.set('Libia', 'Trípoli');
    paisCapital.set('Madagascar', 'Antananarivo');
    paisCapital.set('Malaui', 'Lilongwe');
    paisCapital.set('Malí', 'Bamako');
    paisCapital.set('Marruecos', 'Rabat');
    paisCapital.set('Mauritania', 'Nouakchott');
    paisCapital.set('Mayotte', 'Mamoudzou');
    paisCapital.set('Mozambique', 'Maputo');
    paisCapital.set('Namibia', 'Windhoek');
    paisCapital.set('Níger', 'Niamey');
    paisCapital.set('Nigeria', 'Abuja');
    paisCapital.set('República Centroafricana', 'Bangui');
    paisCapital.set('República Democrática del Congo', 'Kinshasa');
    paisCapital.set('Reunión', 'Saint-Denis');
    paisCapital.set('Ruanda', 'Kigali');
    paisCapital.set('Sáhara Occidental', 'El Aaiún');
    paisCapital.set('Santa Elena, Ascensión y Tristán de Acuña', 'Jamestown');
    paisCapital.set('Santo Tomé y Príncipe', 'São Tomé');
    paisCapital.set('Senegal', 'Dakar');
    paisCapital.set('Seychelles', 'Victoria');
    paisCapital.set('Sierra Leona', 'Freetown');
    paisCapital.set('Somalia', 'Mogadishu');
    paisCapital.set('Sudáfrica', 'Pretoria');
    paisCapital.set('Sudán', 'Khartoum');
    paisCapital.set('Sudán del Sur', 'Juba');
    paisCapital.set('Tanzania', 'Dodoma');
    paisCapital.set('Togo', 'Lomé');
    paisCapital.set('Túnez', 'Túnez');
    paisCapital.set('Uganda', 'Kampala');
    paisCapital.set('Yibuti', 'Djibouti');
    paisCapital.set('Zambia', 'Lusaka');
    paisCapital.set('Zimbabue', 'Harare');
}
setPaisesCapitales(); // To add paises and capitales to paisCapital map().

/**
 * Function that validates if all
 * inputs checked are correct.
 * 
 * @returns Boolean
 */
function validacion(){
    let validacion = true;
    caja_errores = document.getElementById("errorContainer");
    let errores = "";
    
    let descripcion = checkDescripcion();
    if (descripcion[1] == false){
        validacion = false;
        errores += "<p>" + descripcion[0] + ".</p>";
    }
    let updateDatalista = updateDatalist();
    if (updateDatalista[1] == false){
        validacion = false;
        errores += "<p>" + updateDatalista[0] + ".</p>"; // not "", already comes with it
    }
    let date = checkInputDate();
    if (date[1] == false){
        validacion = false;
        errores += "<p>" + date[0] + ".</p>";
    } else{}
    let spaceValues = checkSpace();
    if (spaceValues[1] == false){
        validacion = false;
        errores += "<p>" + spaceValues[0] + ".</p>";
    }
    let kilosValues = checkKilos();
    if (kilosValues[1] == false){
        validacion = false;
        errores += "<p>" + kilosValues[0] + ".</p>";
    }
    let photos = checkPhotos();
    if (photos[1] == false){
        validacion = false;
        errores += "<p>" + photos[0] + ".</p>";
    }
    let email = checkEmail();
    if (email[1] == false){
        validacion = false;
        errores += "<p>" + email[0] + ".</p>";
    }
    let phone = checkPhone();
    if (phone[1] == false){
        validacion = false;
        errores += "<p>" + phone[0] + ".</p>";
    }

    caja_errores.innerHTML = errores;
    return validacion
}

/**
 * Funtion that creates the datalist for paises and ciudades.
 */
function createDatalist(){
    let text = "";
    paisCapital.forEach ((value, key) => {
        text += "<option value=\"" + key + "\">"
    })
    let list = document.getElementsByClassName("paisesDatalist");
    for (let i=0; i < list.length; i++){
        list[i].innerHTML = text
    }

    text = "";
    paisCapital.forEach (function(value, key) {
        text += "<option value=\"" + value + "\">"
    })  
    list = document.getElementsByClassName("ciudadesDatalist");
    for (let i=0; i < list.length;i++){
        list[i].innerHTML = text
    }
    
}

/**
 * Function that checks and updates the changes in pais or ciudad.
 * Changes specific id's.
 * 
 * If pais is selected it automatically selects ciudad and viceversa.
 * @returns [String, Boolean]
 */
function updateDatalist(){// bug: not beeing able to change ciudad after having already selected a pais.
                            // work in progress
    let paisOrigen = document.getElementById("paisOrigen");
    let ciudadOrigen = document.getElementById("ciudadOrigen");
    let paisDestino = document.getElementById("paisDestino");
    let ciudadDestino = document.getElementById("ciudadDestino");
    let error = ""; // acumulates errors to display message to user

    if (paisCapital.get(paisOrigen.value) != undefined){ // if paisOrigen != "" and exists in paisCapital
            paisOrigen.style.borderColor = "#ced4da";
            ciudadOrigen.value = paisCapital.get(paisOrigen.value);
            ciudadOrigen.style.borderColor = "#ced4da";
    } else {
        if (ciudadOrigen.value != ""){
          for (element of paisCapital.entries()){
                if (element[1] == ciudadOrigen.value){ // if ciudadOrigen exists in paisCapital
                    paisOrigen.value = element[0];
                    paisOrigen.style.borderColor = "#ced4da";
                    ciudadOrigen.style.borderColor = "#ced4da";
                    break;
                }
            } 
            if (paisOrigen.value == "" || ciudadOrigen.value == ""){ // if pais or ciudad .value not in paisCapital
                                                                    // then both are now ""
                paisOrigen.value = "";
                ciudadOrigen.value = "";
                paisOrigen.style.borderColor = "red"
                ciudadOrigen.style.borderColor = "red";

                error += "Seleccione un pais/ciudad de origen";
                return [error, false]
            }
        }
    }
    if (paisCapital.get(paisDestino.value) != undefined){ // if paisDestino != "" and exists in paisCapital
        paisDestino.style.borderColor = "#ced4da";
        ciudadDestino.value = paisCapital.get(paisDestino.value);
        ciudadDestino.style.borderColor = "#ced4da";
    } else {
        if (ciudadDestino.value != ""){
            for (element of paisCapital.entries()){
                if (element[1] == ciudadDestino.value){ // if ciudadDestino exists in paisCapital
                    paisDestino.style.borderColor = "#ced4da";
                    paisDestino.value = element[0];
                    ciudadDestino.style.borderColor = "#ced4da";
                    break;
                }
            }
            if (paisDestino.value == "" || ciudadDestino.value == ""){// if pais or ciudad .value not in paisCapital
                                                                    // then both are now ""
                paisDestino.value = "";
                ciudadDestino.value = "";
                paisDestino.style.borderColor = "red"
                ciudadDestino.style.borderColor = "red";

                error += "Seleccione un pais/ciudad de destino";
                return [error, false]
            }
        }
    }

    // Checking if values are empty
    if (paisOrigen.value== "" && ciudadOrigen.value == ""){
        document.getElementById("paisOrigen").style.borderColor = "red";
        document.getElementById("ciudadOrigen").value = "";
        document.getElementById("ciudadOrigen").style.borderColor = "red";
        error += "Tiene que seleccionar Origen";
        return [error, false]
    }
    else if (paisDestino.value == "" && ciudadDestino.value == ""){
        document.getElementById("paisDestino").style.borderColor = "red";
        document.getElementById("ciudadDestino").value = "";
        document.getElementById("ciudadDestino").style.borderColor = "red";
        error += "Tiene que seleccionar Destino";
        return [error, false]
    }

    // To check if origin == destination

    if (paisOrigen.value == paisDestino.value || ciudadOrigen.value == ciudadDestino.value){
        paisDestino.value = "";
        paisDestino.style.borderColor = "red";
        ciudadDestino.value = "";
        ciudadDestino.style.borderColor = "red";
        error += "El destino no puede ser el mismo que el origen";
        return [error, false]
    }
    return ["", true] // if everything is correct
}

/**
 * Function that checks if class="date" inputs have changed, if so,
 * checks if they meet the requirements.
 * 
 * @returns [String, Boolean]
 */
function checkInputDate(){
    if (document.getElementsByClassName("date").length > 0){
        let dates = document.getElementsByClassName("date");
        let regex = /^(2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        var dateList = [];

        for (let i=0;i<dates.length;i++){
            let date = dates[i];
            if (date.value != "" && regex.test(date.value) && date.value.length < 11){
                // checks if date meets requirements
                date.style.borderColor = "#ced4da";
                let dateSplit = (date.value).split("-");
                let newDate = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]); //the -1 because new Date for
                                                                                    //some reason adds an extra month 
                dateList.push(newDate); // adds current date to Datelist
            } else{
                date.style.borderColor = "red";
                return ["Ingrese una fecha válida", false]
            }
        
        }
        if (dateList[0].getTime() >= dateList[1].getTime()){        // checks if date2 is greater
            dates[1].style.borderColor = "red"
            return ["La fecha de regreso tiene que ser mayor que la de ida", false]
        } else {
            document.getElementById("fechaIda").style.borderColor = "#ced4da"
            document.getElementById("fechaRegreso").style.borderColor = "#ced4da"
        }

        return ["", true]
    } else{
        return ["", true] // when pase doesnt have date inputs, do nothing
    }
}

/**
 * Function that checks if input id="espacio" meets the space requirements.
 * @returns [String, Boolean]
 */
function checkSpace(){
    var freeSpace = document.getElementById("espacio");
    if (["10x10x10", "20x20x20", "30x30x30"].includes(freeSpace.value)){
        freeSpace.style.borderColor = "#ced4da"
    } else{
        freeSpace.style.borderColor = "red"
        return ["Elija uno de los espacios disponibles", false]
    }    

    return ["", true]
}

/**
 * Function that checks if input id="kilos" meets the kilos requirements.
 * @returns [String, Boolean]
 */
function checkKilos(){
    let freeKilos = document.getElementById("kilos");
    if (["200 gr", "500 gr", "800 gr", "1 kg", "1.5 kg", "2 kg"].includes(freeKilos.value)){
        freeKilos.style.borderColor = "#ced4da"
    } else{
        freeKilos.style.borderColor = "red"
        return ["Elija uno de los kilos disponibles", false]
    }    

    return ["", true]
}

/**
 * Function that checks if input id="email" meets email requirements.
 * @returns [String, Boolean]
 */
function checkEmail(){
    let email = document.getElementById("email")
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.length < 30 && email.value.length > 5 && regex.test(email.value)){ // if email is correct
        email.style.borderColor = "#ced4da"
    } else {
        email.style.borderColor = "red"
        return ["Escriba una dirección de correo válida", false]
    }    

    return ["", true]
}

/**
 * Function taht checks if class="phone" inputs meet the phone requierements.
 * @returns [String, Boolean]
 */
function checkPhone(){
    let list = document.getElementsByClassName("phone");
    let regex = /^9 [0-9]{8}$/
    let error = "";
    for (let i=0; i < list.length; i++){
        let phone = list[i].value

        if (phone != ""){
            if (regex.test(phone)){ // if number is accepted
                list[i].style.borderColor = "#ced4da";
            } else {
                list[i].style.borderColor = "red";
                error += "Escriba un número de teléfono válido";
                }
        } else{
            list[i].style.borderColor = "#ced4da"
        }
    }
    if (error != ""){
        return [error, false]
    } else{
        return ["", true]
    }
}

/**
 * Function that checks of class="descripcion" inputs meet the
 * descripcion requirements.
 * @returns [String, Boolean]
 */
function checkDescripcion(){
    if (document.getElementsByClassName("descripcion").length > 0){
        let list = document.getElementsByClassName("descripcion");
        let regex = /^[A-Za-z0-9_ ]+$/;
        for (let i=0; i < list.length; i++){
            let descripcion = list[i].value;

            if (descripcion != "" && descripcion.length < 250 && regex.test(descripcion)){
                list[i].style.borderColor = "#ced4da"
            } else{
                list[i].style.borderColor = "red"
                return ["Escriba una descripción de un máximo de 250 carácteres", false]
            }
        }    

        return ["", true] // if everything is correct, do nothing
    } else return ["", true] // if page doesnt have description class, do nothing
}

/**
 * Function that checks class="file" inputs meet the fotos
 * requirements.
 * @returns [String, Boolean]
 */
function checkPhotos(){
    if (document.getElementsByClassName("file").length > 0){
        let list = document.getElementsByClassName("file");
            let listValues = [];
            for (let i=0;i<list.length;i++){
                if (list[i].value != ""){ // if the file is non existent
                    listValues.push(list[i]);
                    list[i].style.borderColor = "#ced4da"
                }
            }
            if (listValues.length == 0){ // if there is no files
                return ["Agregue al menos una foto", false]
            }
            
    } else return ["", true] // do nothing
}

/**
 * Function that makes 'tr data-href=' inputs clickable
 * and sends page to href link.
 */
function clickableRows(){
    document.addEventListener("DOMContentLoaded", () => {
        const rows = document.querySelectorAll("tr[data-href]");
        rows.forEach(row => {
            row.addEventListener("click", () => {
                window.location.href = row.dataset.href;
            })
        })
    })       
}

/**
 * Function that loads "viajes" information based on certain urlParams.
 *
 * To do this it creates "td" elements and appends them to already existing "tr"'s.
 */
function loadViajeInformation(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const paisOrigen = urlParams.get('pais-origen');
    const ciudadOrigen = urlParams.get('ciudad-origen');
    const paisDestino = urlParams.get('pais-destino');
    const ciudadDestino = urlParams.get('ciudad-destino');
    const fechaIda = urlParams.get('fecha-ida');
    const fechaRegreso = urlParams.get('fecha-regreso');
    const espacioDisponible = urlParams.get('espacio-disponible');
    const kilosDisponibles = urlParams.get('kilos-disponibles');
    const email = urlParams.get('email');
    const celular = urlParams.get('celular');

    const paramList = [paisOrigen, ciudadOrigen, paisDestino, ciudadDestino,
        fechaIda, fechaRegreso, espacioDisponible, kilosDisponibles, email, celular]

    const tableRows = document.getElementsByTagName("tr");
    
    for (let i=0;i<tableRows.length;i++){
        let param = document.createElement("td");
        param.innerHTML = paramList[i];
        tableRows[i].appendChild(param);
    }
}

/**
 * Function that creates a lightbox that can dissapear/appear on click.
 * Also adds ./images/1280x1024 images to lightbox depending on the
 * already existing 640x480 images on page.
 */
function lightbox(){
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox)
    lightbox.addEventListener("click", e => {
        lightbox.classList.remove("active") // make img disappear
    })

    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.addEventListener("click", e => {
            lightbox.classList.add("active");
        })
        let originalSrc = image.src.split("/");
        let imgName = originalSrc[originalSrc.length-1].substring(
            0,originalSrc[originalSrc.length-1].length); //gets img name from originalSrc
        let lightboxImg = document.createElement("img");
        lightboxImg.src = "./images/1280x1024/" + imgName;
        lightboxImg.setAttribute("class", "img-fluid img-thumbnail rounded mx-auto d-block") // bootstrap img.
                                                      // Makes it responsive, with border, rounded and centered.

        lightbox.appendChild(lightboxImg); // adds 1280x1024 img to lightbox
    });
    
    

    
}

/**
 * Function that loads "encargos" information based on certain urlParams.
 * 
 * To do this it creates "td" elements with 'img' and 'src' attributes and
 * appends them to already existing "tr".
 */
function loadEncargoInformation(){ //loads informacion-encargo's info
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    const descripcion = urlParams.get('descripcion');
    const paisOrigen = urlParams.get('pais-origen');
    const ciudadOrigen = urlParams.get('ciudad-origen');
    const paisDestino = urlParams.get('pais-destino');
    const ciudadDestino = urlParams.get('ciudad-destino');
    const espacioSolicitado = urlParams.get('espacio-solicitado');
    const kilosSolicitados = urlParams.get('kilos-solicitados');
    const fotoEncargo1 = urlParams.get('foto-encargo-1');
    const fotoEncargo2 = urlParams.get('foto-encargo-2');
    const fotoEncargo3 = urlParams.get('foto-encargo-3');
    const email = urlParams.get('email');
    const celular = urlParams.get('celular');

    const paramList = [descripcion, paisOrigen, ciudadOrigen, paisDestino, ciudadDestino,
        espacioSolicitado, kilosSolicitados, fotoEncargo1, fotoEncargo2, fotoEncargo3, email, celular]

    const tableRows = document.getElementsByTagName("tr");

    for (let i=0;i<tableRows.length;i++){ //add img 
        if (7 <= i && i <= 9 && paramList[i] != ""){
            let param = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("alt", "User uploaded photo")
            let totalSrc = paramList[i].split("/");
            let imgName = totalSrc[totalSrc.length-1].substring(
                0,totalSrc[totalSrc.length-1].length-1); // gets only img name

            let src = "./images/640x480/" + imgName;
            img.setAttribute("src", src);
            img.setAttribute("class", "img-fluid img-thumbnail rounded mx-auto d-block") // bootstrap img.
                                                // Makes it responsive, with border, rounded and centered.
            param.appendChild(img);
            tableRows[i].appendChild(param);

        }else{ // add everything else
            let param = document.createElement("td");
            param.innerHTML = paramList[i];
            tableRows[i].appendChild(param);
        }
    }
}