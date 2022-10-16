
/* 
    SEGUNDA ENTREGA DEL PROYECTO FINAL ()
    
    NOMBRE: MAGALI CACERES

 */


// FUNCIONES

// muestro la lista de conciertos
function mostrarConciertos(){

    console.log("Lista de Conciertos:\n ");

    listaConciertos.forEach((concierto) => {

        console.log(
            `
            Nombre: ${concierto.nombre}
            Fecha: ${concierto.fecha}
            Horario: ${concierto.horario}
            Precio: $${concierto.precio}
            Ubicación: ${concierto.ubicacion}
            Entradas: ${concierto.entradas}
            \n----------------------------------`);

        
    });

    // para ir a comprar o volver al inicio
    let volver = prompt("¿Desea comprar entradas? \n\n_Si \n_No");

    while(volver !== "Si" && volver !== "SI" && volver !== "si" &&  volver !== "No" && volver !== "NO" && volver !== "no"){

        volver = prompt("ERROR. \n\n¿Desea comprar entradas? \n\n_Si \n_No");
    }

    if(volver === "Si" || volver === "SI" || volver === "si"){

        registrarse();
        comprarEntradas();

    } else{

        ingresar()
    }
}

// creo la funcion de registrarse
function registrarse(){

    // creo el array los usuarios creados
    const listaUsuarios = [];

    // agrega los usuarios
    listaUsuarios.push(new Usuario

        (prompt("Ingrese su email: "),
        prompt("Ingrese su contraseña: "),
        prompt("Ingrese su nombre: "),
        prompt("Ingrese su apellido: "),
        parseInt(prompt("Ingrese su telefono: ")))
        );

        // imprime los datos del usuario
        listaUsuarios.forEach( (usuario) => {
    
            console.log(
                `Usuario:
                Nombre: ${usuario.nombre}
                Apellido: ${usuario.apellido}
                Contraseña: ***********
                Email: ${usuario.email}
                Telefono: ${usuario.telefono}
                \n----------------------------------`);
        });
}

// comprar entradas
function comprarEntradas(){

    // Ingreso concierto
    let ingresoConcierto = prompt("Ingrese el nombre del concierto que desea asistir: ");

    // Filtro la lista de conciertos, en la cual verifique si ese concierto existe
    const conciertoEncontrado = listaConciertos.filter((elemento) => {

        return elemento.nombre === ingresoConcierto;
    });


    // si ese concierto no existe.
    if(conciertoEncontrado.length === 0){
        
        console.log("El concierto no fue encontrado.");
        comprarEntradas();
        
    }else{

        // usuari ingresa cantidad de entradas que desea
        let entradasPedidas = parseInt(prompt("Ingrese la cantidad de entradas que desea: "));
        
        // cuantas entradas quedan.
        entradasActuales = conciertoEncontrado[0].entradas - entradasPedidas;

        // verifico si la cantidad de entradas disponibles concuerdan con las entradas a la venta, o las entradas actuales
        while((!hayEntradasDisponibles(entradasPedidas)) || (entradasActuales < entradasPedidas)){
    
            entradasPedidas = parseInt(prompt("La cantidad ingresada no se encuentra disponible.\n\n Reingrese la cantidad de entradas que desea: "));

            
            entradasActuales = conciertoEncontrado[0].entradas - entradasPedidas;
        }

        // calculo el total de pago
        totalDePago = entradasPedidas * parseInt(conciertoEncontrado[0].precio);


        // codigo de descuento
        codigoDeDescuento = conciertoEncontrado[0].nombre + "2022";

        // pregunto si tiene codigo de descuento
        tieneCodigoDeDescuento = prompt("¿Cuenta con un codigo de descuento: \n\n_Si \n_No")

        // si tiene o no codigo de descuento
        if(tieneCodigoDeDescuento === "si" || tieneCodigoDeDescuento === "SI" || tieneCodigoDeDescuento === "Si"){

            // ingresa codigo de descuento
            ingresoCodigoDescuento = prompt("Ingrese el codigo de descuento");

            // verifico si el codido es correcto
            while(ingresoCodigoDescuento !== codigoDeDescuento){

                ingresoCodigoDescuento = prompt("INCORRECTO. \nReingrese el codigo de descuento");
            }

            // realizo el descuento
            descuento = (totalDePago * 15) / 100 
            totalDescuento = totalDePago - descuento;

            
            // muestra info del concierto + cantidad de entradas pedidas + pago + descuento + total
            conciertoEncontrado.forEach((info) => {

            console.log(
                `
                Nombre: ${info.nombre}
                Fecha: ${info.fecha}
                Horario: ${info.horario}
                Precio: $${info.precio}
                Ubicación: ${info.ubicacion}
                ----------------------------------
                Cantidad de entradas = ${entradasPedidas}
                Pago = $${totalDePago}
                Descuento = $${descuento}
                ----------------------------------
                Total = $${totalDescuento}`);
            });
        }else{

            // muestra info del concierto + cantidad de entradas pedidas + total de pago
            conciertoEncontrado.forEach((info) => {

            console.log(
                `
                Nombre: ${info.nombre}
                Fecha: ${info.fecha}
                Horario: ${info.horario}
                Precio: $${info.precio}
                Ubicación: ${info.ubicacion}
                ----------------------------------
                Cantidad de entradas = ${entradasPedidas};
                Total = $${totalDePago}`);
            });

            // cambio la cantidad de entradas que se venden
            conciertoEncontrado[0].entradas = entradasActuales;
        }

        // pregunto si quiere seguir comprando o no
        let seguir = prompt("Seguir comprando: \n\n_Si \n_No");

        while(seguir !== "Si" && seguir !== "SI" && seguir !== "si" &&  seguir !== "No" && seguir !== "NO" && seguir !== "no"){

            seguir = prompt("ERROR. \n\n¿Desea seguir comprando: \n\n_Si \n_No");
        }

        if(seguir === "Si" || seguir === "SI" || seguir === "si"){

            comprarEntradas();

        }else if(seguir === "No" || seguir === "NO" || seguir === "no"){

            ingresar();

        }
    }
}

// funcion que comprueba si existen entradas disponibles
function hayEntradasDisponibles (entradas){

    let disponibles = false;

    for(const concierto of listaConciertos){

        if(concierto.entradas > entradas){

            disponibles = true;
        }
        return disponibles
    }
}

// funcion que pregunta al usuario que hacer
function ingresar(){

    let ingreso = parseInt(prompt("Boleteria: \n\n_Iniciar Sesión: 1 \n\n_Mostrar Lista de Conciertos : 2 \n\n_Cerrar Sesión : 3"));

    while(ingreso !== 1 && ingreso !== 2 && ingreso !== 3){

        ingreso = parseInt(prompt("ERROR Ingrese: \n\n _Iniciar Sesión: 1 \n\n_Mostrar Lista de Conciertos : 2 \n\n_Cerrar Sesión : 3"))
    }

    if(ingreso === 1){

        registrarse();

        comprarEntradas();

    } else if(ingreso === 2){

        mostrarConciertos();
        

    } else if(ingreso === 3){

        console.log("Sesión Cerrada.")
    }
}

// Creo la clase CONCIERTO
class Concierto {

    constructor(nombre, fecha, horario, precio, ubicacion, entradas){

        this.nombre = nombre;
        this. fecha = fecha;
        this.horario = horario;
        this.precio = precio;
        this.ubicacion = ubicacion;
        this.entradas = entradas;
    }
}

// Creo la lista de concierto con un array vacio
const listaConciertos = [];


// agrego cada concierto mediante un .push y sus atributos
listaConciertos.push(new Concierto("Paz Carrara", "10/11/2022", "19:30", 2000, "SARMIENTO 3131 C.A.B.A", 500));
listaConciertos.push(new Concierto("Franco Masciarelli", "12/11/2022", "20:00", 2500, "SARMIENTO 3131 C.A.B.A", 800));
listaConciertos.push(new Concierto("Paula Prieto", "18/11/2022", "19:30", 1000, "SARMIENTO 3131 C.A.B.A", 500));
listaConciertos.push(new Concierto("Martin Oliver", "24/12/2022", "21:00", 800, "SARMIENTO 3131 C.A.B.A", 500));
listaConciertos.push(new Concierto("Delfina Mancardo", "29/12/2022", "21:00", 1000, "SARMIENTO 3131 C.A.B.A", 500));
listaConciertos.push(new Concierto("KND", "30/12/2022", "21:00", 1200, "SARMIENTO 3131 C.A.B.A", 500));



// creo la clase usuario
class Usuario{
    
    constructor (email, contrasenia, nombre, apellido, telefono) {

        this.email = email;
        this.contrasenia = contrasenia;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

// inicio el programa
ingresar();
