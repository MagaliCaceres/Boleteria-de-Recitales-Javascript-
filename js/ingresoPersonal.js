function actualizarListaPersonalJson(){

    const personalLS = localStorage.getItem("lista_personal");

    // si el localStorage esta vacio
    if(personalLS !== null) {

        // agrego la lista de conciertos al localStorage
        personal = JSON.parse(personalLS);
    } else{
        
        localStorage.setItem("lista_personal",JSON.stringify(personal));
    }

    return personal;
};


// funcion que valida los datos ingresados de la persona, en donde le paso por parametro sus datos.
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

    let espacios = false;
    let contador = 0;

    if (contrasenia === "") {

        const constraseniaInvalido = document.createElement("small");
        constraseniaInvalido.innerText = `*Complete este campo.`;
        constraseniaInvalido.className = "texto_validar";

        contenedorContraseniaNuevoPersonal.append(constraseniaInvalido);

        todoCorrecto = false;

    } else if (contrasenia.length < 8) {

        const constraseniaInvalido = document.createElement("small");
        constraseniaInvalido.innerText = `*La contraseña debe tener más de 8 digitos`;
        constraseniaInvalido.className = "texto_validar";

        contenedorContraseniaNuevoPersonal.append(constraseniaInvalido);

        todoCorrecto = false;

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

    if (contrasenia === "") {

        const contraseniaInvalido = document.createElement("small");
        contraseniaInvalido.innerText = `*Complete este campo.`;
        contraseniaInvalido.className = "texto_validar";

        contenedorContrasenia.append(contraseniaInvalido);

        todoCorrecto = false;
    }
    
    
    const found = personal.find(personal => personal.nombre === nombre && personal.contrasenia === contrasenia)

    if(found){

        todoCorrecto
        
    }else{

        const personalInvalido = document.createElement("small");
                personalInvalido.innerHTML = `<br><br> *Personal Incorrecto.`;
                personalInvalido.className = "texto_validar";
    
                contenedorContrasenia.append(personalInvalido);
    
                todoCorrecto = false;
    }

    return todoCorrecto;
}

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

    if (contrasenia !== valorContrasenia) {

        const contraseniaInvalido = document.createElement("small");
        contraseniaInvalido.innerText = `*Complete este campo.`;
        contraseniaInvalido.className = "texto_validar";

        contenedorContraseniaIngreso.append(contraseniaInvalido);

        todoCorrecto = false;
    }

    return todoCorrecto;
}



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

const listaPersonal = actualizarListaPersonalJson();



const paso1 = document.getElementById("paso1");
const contenedorContraseniaIngreso = document.getElementById("contenedor_contrasenia_del_personal");
const inputContraseniaIngreso = document.getElementById("contraseña_personal")
const botonIngresar = document.getElementById("ingreso_personal");

const paso2 = document.getElementById("paso2");

const contenedorNombreNuevoPersonal = document.getElementById("contenedor_nombre_nuevo");
const contenedorApellidoNuevoPersonal = document.getElementById("contenedor_apellido_nuevo");
const contenedorTelefonoNuevoPersonal = document.getElementById("contenedor_telefono_nuevo");
const contenedorEmailNuevoPersonal = document.getElementById("contenedor_email_nuevo");
const contenedorContraseniaNuevoPersonal = document.getElementById("contenedor_contrasenia_nuevo");

const contenedorNombrePersonal = document.getElementById("contenedor_nombre");
const contenedorContrasenia = document.getElementById("contenedor_contrasenia");

const inputNombreNuevoPersonal = document.getElementById("nombre_personal_nuevo");
const inputApellidoNuevoPersonal = document.getElementById("apellido_personal");
const inputTelefonoNuevoPersonal = document.getElementById("telefono_personal");
const inputEmailNuevoPersonal = document.getElementById("email_personal");
const inputContraseniaNuevoPersonal = document.getElementById("contrasenia_personal_nuevo");

const inputNombrePersonal = document.getElementById("nombre_personal");
const inputcontraseniaPersonal = document.getElementById("contrasenia_personal");

const botonPersonalCreado = document.getElementById("personal_creado")
const botonPersonalIngreso = document.getElementById("ingreso_de_personal")


botonIngresar.addEventListener("click", (e) => {

    e.preventDefault();

    const contrasenia = inputContraseniaIngreso.value;

    if(validarEntradaDelPersonal(contrasenia)){

        paso2.classList.remove("no_mostrar");
        paso1.className = "no_mostrar";
    }
});


botonPersonalCreado.addEventListener("click", (e) => {

    e.preventDefault();

    const nombre = inputNombreNuevoPersonal.value;
    const apellido = inputApellidoNuevoPersonal.value;
    const telefono = inputTelefonoNuevoPersonal.value;
    const email = inputEmailNuevoPersonal.value;
    const contrasenia = inputContraseniaNuevoPersonal.value;

    if (validarDatosDelPersonalCreado(nombre, apellido, telefono, email, contrasenia)) {

        let nuevoPersonal = {

            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            contrasenia: contrasenia
        }

        personal.push(nuevoPersonal);
        localStorage.setItem("lista_personal", JSON.stringify(personal));

        inputNombreNuevoPersonal.value = " ";
        inputApellidoNuevoPersonal.value = " ";
        inputTelefonoNuevoPersonal.value = " ";
        inputEmailNuevoPersonal.value = " ";
        inputContraseniaNuevoPersonal.value = " ";

        // alerta de compra finalizada.
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

botonPersonalIngreso.addEventListener("click", (e) =>{

    e.preventDefault();

    const nombrePersonal = inputNombrePersonal.value;
    const contraseniaPersonal = inputcontraseniaPersonal.value;

    if(validarPersonal(nombrePersonal, contraseniaPersonal)){

        location.href = "../paginas/tablaConciertos.html";

        inputNombrePersonal.value = " ";
        inputcontraseniaPersonal.value = " ";
    }
});