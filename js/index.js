/*
    TERCERA ENTREGA DEL PROYECTO FINAL ()
    
    NOMBRE: MAGALI CACERES */


// FUNCIONES

// funcion que realiza la actualización del stock de las entradas, guardandolo en el localStorage
function actualizarEntradas(){

    const conciertoLS = localStorage.getItem("lista_conciertos");

    // si el localStorage esta vacio
    if(conciertoLS !== null) {

        // agrego la lista de conciertos al localStorage
        listaConciertos = JSON.parse(conciertoLS);
    } else{
        
        localStorage.setItem("lista_conciertos",JSON.stringify(listaConciertos));
    }

    return listaConciertos;
}

// función que recibe el parametro de la cantidad de entradas que pide el usuario, y compara si hay entradas disponibles o no, y las descuenta en el total de las entradas.
function descontarEntradas(cantidad) {

    // obtengo el valor del concierto elegido
    const conciertoElegido = seleccionConcierto.value;

    // obtengo todos los nombres y cantidad de entradas de la lista del concierto
    listaDeConcierto.forEach((concierto) => {

        let nombreConcierto = concierto.nombre;
        let entradasConcierto = concierto.entradas;

        // si el concierto elegido es igual al nombre del concierto
        if (conciertoElegido === nombreConcierto) {

            let entradasRestantes = entradasConcierto

            // si el stock de entradas es mayor o igual a la cantidad de entradas que pide el usuario
            if (entradasRestantes >= cantidad) {

                // descuento la cantidad de entradas original
                entradasRestantes = entradasConcierto - cantidad;

                // modifico la cantidad de entradas en el array original
                concierto.entradas = entradasRestantes;

                // muestro el boton que permite seguir al paso siguiente 
                parrafoNoHayEntradas.className = "no_mostrar";
                siguiente.classList.remove('no_mostrar');
                siguiente.className = "boton";

            } else {

                // muestro el parrafo de error y oculto el boton de siguiente
                parrafoNoHayEntradas.classList.remove('no_mostrar');
                siguiente.className = "no_mostrar";
            }
        }

    });
}

// funcion que se encarga de obtener el precio de el concierto seleccionado por el usuario, según la cantidad de entradas pedidas.
function obtenerPrecio() {

    // obtengo el valor del concierto elegido
    const conciertoElegido = seleccionConcierto.value;

    // obtengo todos los nombres y precio del concierto
    listaConciertos.forEach((concierto) => {

        let nombreConcierto = concierto.nombre;
        let precioConcierto = concierto.precio;

        if (conciertoElegido === nombreConcierto) {

            // multiplico el precio del concierto por la cantidad de entradas que selecciona el usuario
            const precioFInal = precioConcierto * parseInt(seleccionCantidadEntradas.value);

            // muestro precio final creando los elementos con DOM
            const precioFinalColor = document.createElement("p");
            precioFinalColor.innerText = `Total:`;
            precioFinalColor.className = "parrafo_datos_color_total";
            muestraDatos.append(precioFinalColor);


            const mostrarTotal = document.createElement("p");
            mostrarTotal.innerText = `$${precioFInal}`;
            mostrarTotal.className = "parrafo_datos";
            muestraDatos.append(mostrarTotal);
        }
    });
}

// funcion que muestra los datos del concierto que selecciono el usuario
function mostrarDatos() {

    // obtengo el valor del concierto elegido
    const conciertoElegido = seleccionConcierto.value;

    // recorro cada elemento de los objetos de dentro de la lista de conciertos
    listaConciertos.forEach((concierto) => {

        let eventoConcierto = concierto.nombre;
        let fechaConcierto = concierto.fecha;
        let horarioConcierto = concierto.horario;
        let ubicacionConcierto = concierto.ubicacion;
        let precioConcierto = concierto.precio;

        if (conciertoElegido === eventoConcierto) {

            // muestro el nombre del evento creando los elementos de DOM
            const eventoColor = document.createElement("p");
            eventoColor.innerText = `Evento: `;
            eventoColor.className = "parrafo_datos_color";
            muestraDatos.append(eventoColor);

            const mostrarEvento = document.createElement("p");
            mostrarEvento.innerText = `${eventoConcierto}`;
            mostrarEvento.className = "parrafo_datos";
            muestraDatos.append(mostrarEvento);

            // muestro fecha del evento creando los elementos de DOM
            const fechaColor = document.createElement("p");
            fechaColor.innerText = `Fecha: `;
            fechaColor.className = "parrafo_datos_color";
            muestraDatos.append(fechaColor);

            const mostrarFecha = document.createElement("p");
            mostrarFecha.innerText = `${fechaConcierto}`;
            mostrarFecha.className = "parrafo_datos";
            muestraDatos.append(mostrarFecha);

            // muestro horario del evento creando los elementos de DOM
            const horarioColor = document.createElement("p");
            horarioColor.innerText = `Horario: `;
            horarioColor.className = "parrafo_datos_color";
            muestraDatos.append(horarioColor);

            const mostrarHorario = document.createElement("p");
            mostrarHorario.innerText = `${horarioConcierto}`;
            mostrarHorario.className = "parrafo_datos";
            muestraDatos.append(mostrarHorario);

            // muestro ubicacion del evento creando los elementos de DOM
            const ubicacionEvento = document.createElement("p");
            ubicacionEvento.innerText = `Ubicacion: `;
            ubicacionEvento.className = "parrafo_datos_color";
            muestraDatos.append(ubicacionEvento);

            const mostrarUbicacion = document.createElement("p");
            mostrarUbicacion.innerText = `${ubicacionConcierto}`;
            mostrarUbicacion.className = "parrafo_datos";
            muestraDatos.append(mostrarUbicacion);

            // muestro precio del evento creando los elementos de DOM
            const precioColor = document.createElement("p");
            precioColor.innerText = `Precio:`;
            precioColor.className = "parrafo_datos_color";
            muestraDatos.append(precioColor);


            const mostrarPrecio = document.createElement("p");
            mostrarPrecio.innerText = `$${precioConcierto}`;
            mostrarPrecio.className = "parrafo_datos";
            muestraDatos.append(mostrarPrecio);
        }
    });
}



// funcion que valida los datos ingresados de la persona, en donde le paso por parametro sus datos.
function validarDatosDeLaPersona(nombre, apellido, telefono, email) {

    let todoCorrecto = true;

    // Que cada vez que ingresa un dato, el texto de error se oculte
    if (todoCorrecto === true || todoCorrecto === false) {

        const textosInvalidar = document.getElementsByTagName("small");

        for (const texto of textosInvalidar) {

            texto.className = "no_mostrar"
        }
    }

    // si el input del nombre esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (nombre === "") {

        const nombreInvalido = document.createElement("small");
        nombreInvalido.innerText = `*Complete este campo.`;
        nombreInvalido.className = "texto_validar";

        contenedorNombre.append(nombreInvalido);

        todoCorrecto = false;
    }

    // si el input del apellido esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (apellido === "") {

        const apellidoInvalido = document.createElement("small");
        apellidoInvalido.innerText = `*Complete este campo.`;
        apellidoInvalido.className = "texto_validar";

        contenedorApellido.append(apellidoInvalido);

        todoCorrecto = false;
    }


    // si el input del telefono esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (telefono === "") {

        const telefonoInvalido = document.createElement("small");
        telefonoInvalido.innerText = `*Complete este campo.`;
        telefonoInvalido.className = "texto_validar";

        contenedorTelefono.append(telefonoInvalido);

        todoCorrecto = false;

        // si los datos ingresados por el usuario son menor o mayor a 10 digitos creo el elemento DOM que avisa al usuario que debe ingresar solo 10 digitos.
    } else if (parseInt(telefono.length) > 10 || parseInt(telefono.length) < 10) {

        const telefonoInvalido = document.createElement("small");
        telefonoInvalido.innerText = `*Debe ingrear 10 digitos.`;
        telefonoInvalido.className = "texto_validar";

        contenedorTelefono.append(telefonoInvalido);

        todoCorrecto = false;

    }

    // creo la expresion que valida los correos
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

        // si el input del email esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (email === "") {

        const emailInvalido = document.createElement("small");
        emailInvalido.innerText = `*Complete este campo.`;
        emailInvalido.className = "texto_validar";

        contenedorEmail.append(emailInvalido);

        todoCorrecto = false;

            // si los datos que ingresados por el usuario no responden a la expresión que valida correos, creo el elemento DOM que avisa al usuario que debe ingresar un correo valido
    } else if (!expresion.test(email)) {

        const emailInvalido = document.createElement("small");
        emailInvalido.innerText = `*Correo invalido.`;
        emailInvalido.className = "texto_validar";

        contenedorEmail.append(emailInvalido);

        todoCorrecto = false;
    }

    return todoCorrecto;
}

// funcion que valida los datos ingresados de la tarjeta, en donde le paso por parametro sus datos.
function validarDatosDeLaTarjeta(selectorTarjeta, numeroTarjeta, codigoDeSeguridad, titular, tarjetaMes, tarjetaAnio) {

    let todoCorrecto = true;

    // Que cada vez que ingresa un dato, el texto de error se oculte
    if (todoCorrecto === true || todoCorrecto === false) {

        const textosInvalidar = document.getElementsByTagName("small");

        for (const texto of textosInvalidar) {

            texto.className = "no_mostrar"
        }
    }

    // cuando el usuario selecciona el valor 0 del selector, creo el elemento DOM que obliga al usuario a elegir una opción valida
    if (selectorTarjeta == null || selectorTarjeta == 0) {

        const tarjetaInvalida = document.createElement("small");
        tarjetaInvalida.innerText = `*Elija una opción.`;
        tarjetaInvalida.className = "texto_validar";

        contenedorTarjeta.append(tarjetaInvalida);

        todoCorrecto = false;
    }


    // si el input del número de la tarjeta esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (numeroTarjeta === "") {

        const numeroInvalido = document.createElement("small");
        numeroInvalido.innerText = `*Complete este campo.`;
        numeroInvalido.className = "texto_validar";

        contenedorNumeroDeTarjeta.append(numeroInvalido);

        todoCorrecto = false;

        // si los datos ingresados por el usuario son menor o mayor a 16 digitos creo el elemento DOM que avisa al usuario que debe ingresar solo 16 digitos.
    } else if (parseInt(telefono.length) > 16 || parseInt(telefono.length) < 16) {

        const numeroInvalido = document.createElement("small");
        numeroInvalido.innerText = `*Inserte los 16 digitos.`;
        numeroInvalido.className = "texto_validar";

        contenedorNumeroDeTarjeta.append(numeroInvalido);

        todoCorrecto = false;
    }

    // si el input del codigo de seguridad de la tarjeta esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (codigoDeSeguridad === "") {

        const codigoSeguridadInvalido = document.createElement("small");
        codigoSeguridadInvalido.innerText = `*Complete este campo.`;
        codigoSeguridadInvalido.className = "texto_validar";

        contenedorCodigoDeSeguridad.append(codigoSeguridadInvalido);

        todoCorrecto = false;

        // si los datos ingresados por el usuario son menor o mayor a 3 digitos creo el elemento DOM que avisa al usuario que debe ingresar solo 3 digitos.
    } else if (parseInt(codigoDeSeguridad.length) > 3 || parseInt(codigoDeSeguridad.length) < 3) {

        const codigoSeguridadInvalido = document.createElement("small");
        codigoSeguridadInvalido.innerText = `*Inserte los 3 digitos.`;
        codigoSeguridadInvalido.className = "texto_validar";

        contenedorCodigoDeSeguridad.append(codigoSeguridadInvalido);

        todoCorrecto = false;
    }


    // si el input del titular de la tarjeta esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (titular === "") {

        const titularInvalido = document.createElement("small");
        titularInvalido.innerText = `*Complete este campo.`;
        titularInvalido.className = "texto_validar";

        contenedorTitularTarjeta.append(titularInvalido);

        todoCorrecto = false;
    }


    // si el usuario selecciona el valor por defecto creo el elemento DOM que avisa al usuario que seleccionar una opción valida

    const mesActual = new Date().getMonth();

    if (tarjetaMes == null || tarjetaMes == 0) {

        const mesInvalido = document.createElement("small");
        mesInvalido.innerText = `*Elija una opción.`;
        mesInvalido.className = "texto_validar";

        contenedorVencimientoTarjeta.append(mesInvalido);

        todoCorrecto = false;

    }else if(((parseInt(tarjetaMes) -1) < mesActual) && ((parseInt(tarjetaAnio) === añoActual))){

        const mesInvalido = document.createElement("small");
        mesInvalido.innerText = `*La opcion no es correcta.`;
        mesInvalido.className = "texto_validar";

        contenedorVencimientoTarjeta.append(mesInvalido);

        todoCorrecto = false;
    }

    return todoCorrecto;
}



// OBJETOS

// creo array que concieten los objetos conciertos
let listaConciertos = [];

// agrego los objetos al array.
listaConciertos.push(new Concierto("Paz Carrara - Me canse de hacer canciones", "10/12/2022", "19:30", 2000, "AV. Unacalle 1123 - C.A.B.A", 500));

listaConciertos.push(new Concierto("Franco Masciarelli - Otro Sol", "15/12/2022", "20:00", 2500, "AV. Unacalle 1123 - C.A.B.A", 500));

listaConciertos.push(new Concierto("Paula Prieto - esto es para mi,", "21/12/2022", "19:30", 1000, "AV. Unacalle 1123 - C.A.B.A", 500));

listaConciertos.push(new Concierto("Martin Oliver - COMO CREAR MONSTRUOS", "05/01/2023", "21:00", 800, "AV. Unacalle 1123 - C.A.B.A", 500));

listaConciertos.push(new Concierto("Delfina Mancardo - OCTANTE", "29/01/2023", "21:00", 1000, "AV. Unacalle 1123 - C.A.B.A", 500));

listaConciertos.push(new Concierto("KND - Bonnefaid", "20/01/2023", "21:00", 1200, "AV. Unacalle 1123 - C.A.B.A", 500));

const listaDeConcierto = actualizarEntradas();



// VARIABLES GLOBALES

const concierto1 = document.getElementById("concierto1_img");
const info_concierto1 = document.getElementById("info_concierto1");
const salirInfo1 = document.getElementById("cruz_icono1");

const concierto2 = document.getElementById("concierto2_img");
const info_concierto2 = document.getElementById("info_concierto2");
const salirInfo2 = document.getElementById("cruz_icono2");

const concierto3 = document.getElementById("concierto3_img");
const info_concierto3 = document.getElementById("info_concierto3");
const salirInfo3 = document.getElementById("cruz_icono3");

const concierto4 = document.getElementById("concierto4_img");
const info_concierto4 = document.getElementById("info_concierto4");
const salirInfo4 = document.getElementById("cruz_icono4");

const concierto5 = document.getElementById("concierto5_img");
const info_concierto5 = document.getElementById("info_concierto5");
const salirInfo5 = document.getElementById("cruz_icono5");

const concierto6 = document.getElementById("concierto6_img");
const info_concierto6 = document.getElementById("info_concierto6");
const salirInfo6 = document.getElementById("cruz_icono6");


const botonPersonal = document.getElementById("ingresar_personal");
const botonComprar = document.getElementById("boton_comprar");
const botonSiguiente = document.getElementById("boton_siguiente");
const formularioDatos = document.getElementById("boton_paso4");
const formularioPago = document.getElementById("pagar");
const recargaPagina = document.getElementById("volver");

const boleteria = document.getElementById("boleteria");
const nosotros = document.getElementById("nosotros");

const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const paso3 = document.getElementById("paso3");
const siguiente = document.getElementById("siguiente");
const paso4 = document.getElementById("paso4");
const parrafoNoHayEntradas = document.getElementById("cantidad_parrafo");
const paso5 = document.getElementById("paso5");
const muestraDatos = document.getElementById("muestra_datos");
const finalizarCompra = document.getElementById("finalizar_compra");

const seleccionConcierto = document.getElementById("concierto");
const seleccionFecha = document.getElementById("fecha_concierto");
const seleccionCantidadEntradas = document.getElementById("cantidad_entradas");
const selectorTarjeta = document.getElementById("medio_pago");
const selectorMesTarjeta = document.getElementById("mes_tarjeta");
const selectorAnioTarjeta = document.getElementById("anio_tarjeta");

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("email");
const inputNumeroDeTarjeta = document.getElementById("numero_tarjeta");
const inputCodigoDeSeguridadTarjeta = document.getElementById("codigo_seguridad");
const inputTitularDeLaTarjeta = document.getElementById("titular_tarjeta");

const contenedorNombre = document.getElementById("contenedor_input_nombre");
const contenedorApellido = document.getElementById("contenedor_input_apellido");
const contenedorTelefono = document.getElementById("contenedor_input_telefono");
const contenedorEmail = document.getElementById("contenedor_input_email");
const contenedorTarjeta = document.getElementById("contenedor_tarjeta");
const contenedorNumeroDeTarjeta = document.getElementById("contenedor_numero_tarjeta");
const contenedorCodigoDeSeguridad = document.getElementById("contenedor_codigo_seguridad");
const contenedorTitularTarjeta = document.getElementById("contenedor_titular_tarjeta");
const contenedorVencimientoTarjeta = document.getElementById("contenedor_vencimiento_tarjeta");





// CREACION DE NODOS DOM

// creo las opciones para el selectos de conciertos
for (const concierto of listaConciertos) {

    // creo las opciones de conciertos mostrando su nombre
    const opcionConcierto = document.createElement("option");
    opcionConcierto.innerText = concierto.nombre;

    seleccionConcierto.append(opcionConcierto);
}

// select del mes de vencimiento de la tarjeta del usuario
for (let i = 1; i <= 12; i++) {

    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;

    selectorMesTarjeta.append(opcion);
}

// select del año de vencimiento de la tarjeta del usuario
const añoActual = new Date().getFullYear();

for (let i = añoActual; i <= añoActual + 10; i++) {

    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;

    selectorAnioTarjeta.append(opcion);
}






// EVENTOS

// mostrar info de los conciertos

// cuando hago click en la imagen del cocierto 1
concierto1.addEventListener("click", () =>{

    // muestro la información completa
    info_concierto1.classList.remove("no_mostrar");
    info_concierto1.className = ("info_completa");
});

// cuando hago click en la cruz de salir
salirInfo1.addEventListener("click", () => {

    // oculto la información completa
    info_concierto1.className = "no_mostrar";
});


// cuando hago click en la imagen del cocierto 2
concierto2.addEventListener("click", () =>{

    // muestro la información completa
    info_concierto2.classList.remove("no_mostrar");
    info_concierto2.className = ("info_completa");
});

// cuando hago click en la cruz de salir
salirInfo2.addEventListener("click", () => {

    // oculto la información completa
    info_concierto2.className = "no_mostrar";
});


// cuando hago click en la imagen del cocierto 3
concierto3.addEventListener("click", () =>{

    // muestro la información completa
    info_concierto3.classList.remove("no_mostrar");
    info_concierto3.className = ("info_completa");
});

// cuando hago click en la cruz de salir
salirInfo3.addEventListener("click", () => {

    // oculto la información completa
    info_concierto3.className = "no_mostrar";
});


// cuando hago click en la imagen del cocierto 4
concierto4.addEventListener("click", () =>{

    // muestro la información completa
    info_concierto4.classList.remove("no_mostrar");
    info_concierto4.className = ("info_completa");
});

// cuando hago click en la cruz de salir
salirInfo4.addEventListener("click", () => {

    // oculto la información completa
    info_concierto4.className = "no_mostrar";
});


// cuando hago click en la imagen del cocierto 5
concierto5.addEventListener("click", () =>{

    // muestro la información completa
    info_concierto5.classList.remove("no_mostrar");
    info_concierto5.className = ("info_completa");
});

// cuando hago click en la cruz de salir
salirInfo5.addEventListener("click", () => {

    // oculto la información completa
    info_concierto5.className = "no_mostrar";
});


// cuando hago click en la imagen del cocierto 5
concierto6.addEventListener("click", () =>{

    // muestro la información completa
    info_concierto6.classList.remove("no_mostrar");
    info_concierto6.className = ("info_completa");
});

// cuando hago click en la cruz de salir
salirInfo6.addEventListener("click", () => {

    // oculto la información completa
    info_concierto6.className = "no_mostrar";
});


// ir a la pagina de ingreso del personal
botonPersonal.addEventListener("click", () =>{

    location.href = "paginas/ingresoPersonal.html";
});




// cuando el usuario haga clik en el boton de "comprar entradas" 
botonComprar.addEventListener("click", () => {

    // elimino la clase "no_mostrar" al paso 1 (selector de concierto)
    paso1.classList.remove('no_mostrar');
    botonComprar.className = "no_mostrar";
    boleteria.className = "no_mostrar";
    nosotros.className = "no_mostrar";
});



// cuando el usuario selecciona el concierto
seleccionConcierto.addEventListener("change", (e) => {

    // si se elige una opcion valida
    if (seleccionConcierto.value !== "") {

        // vacio la clase del paso 2 (elegir fecha) y del paso 3 (elegir cantidad de entradas)
        paso2.className = "";
        paso3.className = "";


        // saco el valor de la opcion que eligio el usuario
        const target = e.target;
        const valor = target.value;

        // retorno el array que contiene el nombre que es igual al valor del concierto elegido
        const nombreConcierto = listaDeConcierto.find((concierto) => {

            return concierto.nombre === valor;
        });


        // si el valor es igual al nombre del concierto
        if (valor === nombreConcierto.nombre) {

            // vacio el selector de fechas del concierto
            seleccionFecha.innerHTML = "";

            // creo otro select que permite elegir las fechas
            const opcionFecha = document.createElement("option");

            // le agrego la fecha del concierto correspondiente
            opcionFecha.innerText = nombreConcierto.fecha;

            // agrego la opcion de la fecha al selector
            seleccionFecha.append(opcionFecha);
        }


    } else {
        // si no elijo ningun concierto no muestro los pasos siguientes
        paso2.className = "no_mostrar";
        paso3.className = "no_mostrar";
    }
});


// cuando elijo la cantidad de entradas
seleccionCantidadEntradas.addEventListener("change", (e) => {

    // saco el valor de la opción elegida por el usuario
    const target = e.target;
    const cantidadEntradas = target.value;

    // si se elige la opcion por defecto
    if(seleccionCantidadEntradas.value === "0"){

        // no muestro el mensaje de error, y tampoco el boton de siguiente
        siguiente.className = "no_mostrar";
        parrafoNoHayEntradas.remove();

    }else{

        //funcion que descuenta entradas
        descontarEntradas(cantidadEntradas);
    }

});



// cuando termino se completa de manera correcta los 3 pasos (elegir concierto, fecha y cantidad de entradas) y son validadas, paso al siguiente paso
botonSiguiente.addEventListener("click", () => {

    // elimino la clase "no_mostrar" al paso 4 (ingresar datos del usuario)
    paso4.classList.remove('no_mostrar');

        
    // oculto los pasos 1,2 y 3 (ingresa datos el usuario)
    paso1.className = ("no_mostrar")
    paso2.className = ("no_mostrar")
    paso3.className = ("no_mostrar")


});


// cuando el usuario, luego de ingresar los datos, quiere pasar al siguiente paso
formularioDatos.addEventListener("click", (event) => {

    // detengo el flujo del evento
    event.preventDefault();
    // obtengo todos los valores de los datos ingresados/seleccionados por el usuario
    const cantidadEntradas = seleccionCantidadEntradas.value;
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const email = inputEmail.value;
    const telefono = inputTelefono.value;


    // si los datos ingresados son correctos en su validación
    if (validarDatosDeLaPersona(nombre, apellido, telefono, email)) {

        // muestro nombre y apellido de la persona creando los elementos DOM correspondientes
        const nombreApellidoColor = document.createElement("p");
        nombreApellidoColor.innerText = `Nombre y Apellido: `;
        nombreApellidoColor.className = "parrafo_datos_color";
        muestraDatos.append(nombreApellidoColor);

        const mostrarNombreYApellido = document.createElement("p");
        mostrarNombreYApellido.innerText = `${nombre} ${apellido}`;
        mostrarNombreYApellido.className = "parrafo_datos";
        muestraDatos.append(mostrarNombreYApellido);

        // muestro email de la persona creando los elementos DOM correspondientes
        const emailColor = document.createElement("p");
        emailColor.innerText = `Email: `;
        emailColor.className = "parrafo_datos_color";
        muestraDatos.append(emailColor);

        const mostrarEmail = document.createElement("p");
        mostrarEmail.innerText = `${email}`;
        mostrarEmail.className = "parrafo_datos";
        muestraDatos.append(mostrarEmail);

        // muestro los datos del concierto elegido
        mostrarDatos();

        // muestro cantidad de entradas pedidas creando los elementos DOM correspondientes
        const cantidadEntradasColor = document.createElement("p");
        cantidadEntradasColor.innerText = `Cantidad de Entradas: `;
        cantidadEntradasColor.className = "parrafo_datos_color";
        muestraDatos.append(cantidadEntradasColor);

        const mostrarCantidadEntradas = document.createElement("p");
        mostrarCantidadEntradas.innerText = `${cantidadEntradas}`;
        mostrarCantidadEntradas.className = "parrafo_datos";
        muestraDatos.append(mostrarCantidadEntradas);

        // muestro el precio final de la compra
        obtenerPrecio();
        
        // muestro el paso siguiente
        paso5.classList.remove('no_mostrar');

        // Limpiar inputs
        inputNombre.value = "";
        inputApellido.value = "";
        inputEmail.value = "";
        inputTelefono.value = "";

        // oculto el paso 4 (ingresa datos el usuario)
        paso4.className = ("no_mostrar")
    }
});

// cuando el usuario, luego de ingresar los datos de la tarjeta, quiere finalizar la compra 
formularioPago.addEventListener("click", (event) => {

    // detengo el flujo del evento
    event.preventDefault();

    // obtengo todos los valores de los datos de la tarjeta ingresados por la persona
    const tarjetaElegida = selectorTarjeta.value;
    const numeroDeTarjeta = inputNumeroDeTarjeta.value;
    const codigoDeSeguridadTarjeta = inputCodigoDeSeguridadTarjeta.value;
    const titularTarjeta = inputTitularDeLaTarjeta.value;
    const vencimientoTarjetaMes = selectorMesTarjeta.value;
    const vencimientoTarjetaAnio = selectorAnioTarjeta.value;

    // si los datos ingresados son correctos en su validación
    if (validarDatosDeLaTarjeta(tarjetaElegida, numeroDeTarjeta, codigoDeSeguridadTarjeta, titularTarjeta, vencimientoTarjetaMes, vencimientoTarjetaAnio)) {

        
        // guardo la lista de conciertos nuevamente en el localStorage
        localStorage.setItem("lista_conciertos",JSON.stringify(listaConciertos));

        // Limpiar inputs
        selectorTarjeta.value = "";
        inputNumeroDeTarjeta.value = "";
        inputCodigoDeSeguridadTarjeta.value = "";
        inputTitularDeLaTarjeta.value = "";
        selectorMesTarjeta.value = "";
        selectorAnioTarjeta.value = "";

        // alerta de compra finalizada.
        Swal.fire({
            title: '¡Gracias Por Tu Compra!',
            text:'A continuación, recibira toda la información a su cuenta de correo.',
            icon: 'success',
            confirmButtonText: 'Volver'
        }).then((result) => {
            
                if(result.isConfirmed || result.isDismissed) {
                    location.reload();
                }
        });

    }
});