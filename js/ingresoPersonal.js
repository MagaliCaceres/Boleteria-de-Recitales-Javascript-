// FUNCIONES

// funcion que actualiza la lista del personal
function actualizarListaPersonalJson(){

    const personalLS = localStorage.getItem("lista_personal");

    // si el localStorage esta vacio
    if(personalLS !== null) {

        // agrego la lista del personal al localStorage
        personal = JSON.parse(personalLS);
    } else{
        // si no, agrego el array del personal
        localStorage.setItem("lista_personal",JSON.stringify(personal));
    }

    return personal;
};

// funcion que valida la contraseña ingresada por el personal para ingresar su usuario
function validarEntradaDelPersonal(contrasenia){

    let todoCorrecto = true;

    // Que cada vez que ingresa un dato, el texto de error se oculte
    if (todoCorrecto === true || todoCorrecto === false) {

        const textosInvalidar = document.getElementsByTagName("small");

        for (const texto of textosInvalidar) {

            texto.className = "no_mostrar"
        }
    }

    const valorContrasenia = "personalDepartamento1890";

    // si la contraseña no es la correcta, comunico al usuario, comunico que la contraseña es incorrectas
    if (contrasenia !== valorContrasenia) {

        const contraseniaInvalido = document.createElement("small");
        contraseniaInvalido.innerText = `*Contraseña incorrecta.`;
        contraseniaInvalido.className = "texto_validar";

        contenedorContraseniaIngreso.append(contraseniaInvalido);

        todoCorrecto = false;
    }

    return todoCorrecto;
}

// funcion que valida los datos ingresados del personal al registrarse, en donde le paso por parametro sus datos.
function validarDatosDelPersonalCreado(nombre, apellido, telefono, email, contrasenia) {

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

        contenedorNombreNuevoPersonal.append(nombreInvalido);

        todoCorrecto = false;
    }

    // si el input del apellido esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (apellido === "") {

        const apellidoInvalido = document.createElement("small");
        apellidoInvalido.innerText = `*Complete este campo.`;
        apellidoInvalido.className = "texto_validar";

        contenedorApellidoNuevoPersonal.append(apellidoInvalido);

        todoCorrecto = false;
    }


    // si el input del telefono esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (telefono === "") {

        const telefonoInvalido = document.createElement("small");
        telefonoInvalido.innerText = `*Complete este campo.`;
        telefonoInvalido.className = "texto_validar";

        contenedorTelefonoNuevoPersonal.append(telefonoInvalido);

        todoCorrecto = false;

        // si los datos ingresados por el usuario son menor o mayor a 10 digitos creo el elemento DOM que avisa al usuario que debe ingresar solo 10 digitos.
    } else if (parseInt(telefono.length) > 10 || parseInt(telefono.length) < 10) {

        const telefonoInvalido = document.createElement("small");
        telefonoInvalido.innerText = `*Debe ingrear 10 digitos.`;
        telefonoInvalido.className = "texto_validar";

        contenedorTelefonoNuevoPersonal.append(telefonoInvalido);

        todoCorrecto = false;

    }

    // creo la expresion que valida los correos
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    // si el input del email esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (email === "") {

        const emailInvalido = document.createElement("small");
        emailInvalido.innerText = `*Complete este campo.`;
        emailInvalido.className = "texto_validar";

        contenedorEmailNuevoPersonal.append(emailInvalido);

        todoCorrecto = false;

        // si los datos que ingresados por el usuario no responden a la expresión que valida correos, creo el elemento DOM que avisa al usuario que debe ingresar un correo valido
    } else if (!expresion.test(email)) {

        const emailInvalido = document.createElement("small");
        emailInvalido.innerText = `*Correo invalido.`;
        emailInvalido.className = "texto_validar";

        contenedorEmailNuevoPersonal.append(emailInvalido);

        todoCorrecto = false;
    }

    // si el input de la contraseña esta vacio, creo el elemento DOM que avisa al usuario que debe completar el campo
    if (contrasenia === "") {

        const constraseniaInvalido = document.createElement("small");
        constraseniaInvalido.innerText = `*Complete este campo.`;
        constraseniaInvalido.className = "texto_validar";

        contenedorContraseniaNuevoPersonal.append(constraseniaInvalido);

        todoCorrecto = false;

        // si los datos ingresados por el usuario son menor a 8 digitos creo el elemento DOM que avisa al usuario que debe ingresar solo 8 digitos.
    } else if (contrasenia.length < 8) {

        const constraseniaInvalido = document.createElement("small");
        constraseniaInvalido.innerText = `*La contraseña debe tener más de 8 digitos`;
        constraseniaInvalido.className = "texto_validar";

        contenedorContraseniaNuevoPersonal.append(constraseniaInvalido);

        todoCorrecto = false;

        // si los datos ingresados por el usuario son menor o mayor a 20 digitos creo el elemento DOM que avisa al usuario que debe ingresar solo 20 digitos.
    } else if (contrasenia.length > 20) {

        const constraseniaInvalido = document.createElement("small");
        constraseniaInvalido.innerText = `*La contraseña debe tener menos de 20 digitos`;
        constraseniaInvalido.className = "texto_validar";

        contenedorContraseniaNuevoPersonal.append(constraseniaInvalido);

        todoCorrecto = false;

    }

    return todoCorrecto;
};

function validarPersonal(nombre, contrasenia) {

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

        contenedorNombrePersonal.append(nombreInvalido);

        todoCorrecto = false;
    }

    // si el input de la contraseña esta vacio creo el elemento DOM que avisa al usuario que debe completar el campo
    if (contrasenia === "") {

        const contraseniaInvalido = document.createElement("small");
        contraseniaInvalido.innerText = `*Complete este campo.`;
        contraseniaInvalido.className = "texto_validar";

        contenedorContrasenia.append(contraseniaInvalido);

        todoCorrecto = false;
    }
    
    // creo uuna variable donde verifique si el nombre y la contrasenia existen en el array
    const found = personal.find(personal => personal.nombre === nombre && personal.contrasenia === contrasenia)

    if(found){

        todoCorrecto
        
    }else{
        // si el resultado es false, comunico que ese usuario no existe
        const personalInvalido = document.createElement("small");
                personalInvalido.innerHTML = `<br><br> *Personal Incorrecto.`;
                personalInvalido.className = "texto_validar";
    
                contenedorContrasenia.append(personalInvalido);
    
                todoCorrecto = false;
    }
    return todoCorrecto;
}




// creo array que contiene los datos de cada personal
let personal = [
    {
        nombre: "Miguel",
        apellido: "Perez",
        telefono: "1130974723",
        email: "miguelPerez@gmail.com",
        contrasenia: "miguelDepartamento"
    },

    {
        nombre: "Carmen",
        apellido: "Escobar",
        telefono: "1130974773",
        email: "CarmenEsco@gmail.com",
        contrasenia: "carmenDepartamento"
    }
]

// actualizo la lista por si se crea un nuevo personal
const listaPersonal = actualizarListaPersonalJson();



// VARIABLES GLOBALES

// pasos a mostrar
const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");

// contenedores
const contenedorContraseniaIngreso = document.getElementById("contenedor_contrasenia_del_personal");

const contenedorNombreNuevoPersonal = document.getElementById("contenedor_nombre_nuevo");
const contenedorApellidoNuevoPersonal = document.getElementById("contenedor_apellido_nuevo");
const contenedorTelefonoNuevoPersonal = document.getElementById("contenedor_telefono_nuevo");
const contenedorEmailNuevoPersonal = document.getElementById("contenedor_email_nuevo");
const contenedorContraseniaNuevoPersonal = document.getElementById("contenedor_contrasenia_nuevo");

const contenedorNombrePersonal = document.getElementById("contenedor_nombre");
const contenedorContrasenia = document.getElementById("contenedor_contrasenia");

// input de la contraseña de la seccion del personal
const inputContraseniaIngreso = document.getElementById("contraseña_personal")

// inputs del nuevo personal
const inputNombreNuevoPersonal = document.getElementById("nombre_personal_nuevo");
const inputApellidoNuevoPersonal = document.getElementById("apellido_personal");
const inputTelefonoNuevoPersonal = document.getElementById("telefono_personal");
const inputEmailNuevoPersonal = document.getElementById("email_personal");
const inputContraseniaNuevoPersonal = document.getElementById("contrasenia_personal_nuevo");

// inputs del personal ya guardado
const inputNombrePersonal = document.getElementById("nombre_personal");
const inputcontraseniaPersonal = document.getElementById("contrasenia_personal");

// botones
const botonIngresar = document.getElementById("ingreso_personal");
const botonPersonalCreado = document.getElementById("personal_creado")
const botonPersonalIngreso = document.getElementById("ingreso_de_personal")



// EVENTOS

// cuando hago click en el boton para confirmar la contraseña de ingreso como personal
botonIngresar.addEventListener("click", (e) => {

    // detengo el flujo
    e.preventDefault();

    const contrasenia = inputContraseniaIngreso.value;

    // valido la función pasando el valor ingresado por la persona
    if(validarEntradaDelPersonal(contrasenia)){

        // muestro/oculto pasos
        paso2.classList.remove("no_mostrar");
        paso1.className = "no_mostrar";
    }
});

// cuando hago click en el boton para confirmar los datos del personal creado
botonPersonalCreado.addEventListener("click", (e) => {

        // detengo el flujo
    e.preventDefault();

    // variables que contienen el valor de los datos ingresados por el personal que quiere registrarse
    const nombre = inputNombreNuevoPersonal.value;
    const apellido = inputApellidoNuevoPersonal.value;
    const telefono = inputTelefonoNuevoPersonal.value;
    const email = inputEmailNuevoPersonal.value;
    const contrasenia = inputContraseniaNuevoPersonal.value;

    // valido la función pasando las varaibles con los valores ingresados por el personal
    if (validarDatosDelPersonalCreado(nombre, apellido, telefono, email, contrasenia)) {

        // creo un objeto donde sus atributos tienen el valor de los datos ingresados
        let nuevoPersonal = {

            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            contrasenia: contrasenia
        }

        // agrego el objeto al array del personal
        personal.push(nuevoPersonal);

        // agrego el array del personal actualizado al localStorage
        localStorage.setItem("lista_personal", JSON.stringify(personal));

        // limpio los inputs
        inputNombreNuevoPersonal.value = " ";
        inputApellidoNuevoPersonal.value = " ";
        inputTelefonoNuevoPersonal.value = " ";
        inputEmailNuevoPersonal.value = " ";
        inputContraseniaNuevoPersonal.value = " ";

        // alerta de personal registrado con exito
        Swal.fire({
            title: '¡Personal Creado!',
            icon: 'success',
            confirmButtonText: 'Volver'
        }).then((result) => {

            if (result.isConfirmed || result.isDismissed) {
                location.reload();
            }
        });
    }
});

// cuando hago click en el boton para confirmar los datos del personal ya registrado
botonPersonalIngreso.addEventListener("click", (e) =>{

    // detengo el flujo
    e.preventDefault();

    // guardo el valor de los datos ingresados por el personal
    const nombrePersonal = inputNombrePersonal.value;
    const contraseniaPersonal = inputcontraseniaPersonal.value;

    // valido la función con los valores ingresados por el personal
    if(validarPersonal(nombrePersonal, contraseniaPersonal)){

        // lo envio a otra pagina html
        location.href = "../paginas/tablaConciertos.html";

        // vacio los inputs 
        inputNombrePersonal.value = " ";
        inputcontraseniaPersonal.value = " ";
    }
});