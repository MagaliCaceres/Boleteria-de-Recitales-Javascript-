// BOLETERIA DE RECITALES

// CLASE QUE CREA LOS RECITALES, ESPECIFICANDO EN SU CONSTRUCTOR SU NOMBRE, FECHA, HORARIO, PRECIO, UBICACIÓN, SALA Y CAPACIDAD DE LA SALA. 
class Recital {
    constructor(nombre, fecha, horario, precio, ubicacion, sala, capacidad) {

        this.nombre = nombre;
        this.fecha = fecha;
        this.horario = horario;
        this.precio = precio;
        this.ubicacion = ubicacion;
        this.sala = sala;
        this.capacidad = capacidad;
    }

    mostrarLista() {

        console.log("Recital \n\nNombre: " + this.nombre + "\nFecha: " + this.fecha + "hs\nHorario: " + this.horario + "\nPrecio: $" + this.precio + "\nUbicación: " + this.ubicacion + "\nSala: " + this.sala + "\nCapacidad: " + this.capacidad + " personas.");
    }
}

// CREACIÓN DE LOS 6 RECITALES:

const recital1 = new Recital("Paz Carrara", "10/10/2022", "19:30", 1500, "SARMIENTO 3131 C.A.B.A", 3, 2000);

const recital2 = new Recital("Conociendo Rusia", "12/10/2022", "20:00", 2500, "SARMIENTO 3131 C.A.B.A", 2, 3500);

const recital3 = new Recital("Paula Prieto", "18/10/2022", "19:30", 1700, "SARMIENTO 3131 C.A.B.A", 3, 2000);

const recital4 = new Recital("Zoe Gotusso", "24/10/2022", "21:00", 2300, "SARMIENTO 3131 C.A.B.A", 2, 3500);

const recital5 = new Recital("Leiva", "29/10/2022", "21:00", 3000, "SARMIENTO 3131 C.A.B.A", 1, 5000);

const recital6 = new Recital("Miranda", "30/10/2022", "21:00", 3000, "SARMIENTO 3131 C.A.B.A", 1, 5000);


// CREACIÓN DE LA CLASE USUARIO, EN LA CUAL VA A INFORMAR LOS DATOS REQUERIDOS;
class Usuario {

    constructor(nombre, apellido, edad, dni, email, telefono) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;

        while (this.edad < 18) {

            this.edad = parseInt(prompt("Ingreso prohibido a menores de edad. \n\nReingrese su edad: "));
        }
    }

    mostrar() {

        console.log("Usuario registrado. \n\nNombre:" + this.nombre +
            "\nApellido: " + this.apellido + "\nEdad: " + this.edad +
            "\nEmail: " + this.email + "\nTelefono: " + this.telefono);
    }
}

// FUNCION QUE INICIA LA COMPRA DE LOS BOLETOS DE LOS RECITALES
function iniciarCompra(){

    // INICIO DE PROGRAMA

    // INICAR COMPRA O FINALIZAR PROGRAMA.
    let iniciarCompra = parseInt(prompt("Boleteria: \n\nDigite: \n1_ Comprar Entradas: \n2_ Salir del Programa."));

    // INICIA COMPRA
    if(iniciarCompra === 1){

        // EL USUARIO INGRESA SUS DATOS
        const usuario = new Usuario(
            (prompt("Ingrese su nombre: ")),
            (prompt("Ingrese su apellido: ")),
            (parseInt(prompt("Ingrese su edad: "))),
            (parseInt(prompt("Ingrese su DNI: "))),
            prompt("Ingrese su email: "),
            (parseInt(prompt("Ingrese su telefono"))),
        );

        // MUESTRA LOS DATOS DEL USUARIO
        usuario.mostrar();

        // INICIA LA FUNCIÓN DE COMPRAR ENTRADAS, DONDE VA A INGRESAR LA CANTIDAD DE ENTRADAS DESEADAS, SI TIENE UN CUPON DE DESCUENTO, Y EL TOTAL DE LA COMPRA.
        comprarEntradas();

    // FINALIZA PROGRAMA
    } else {
        console.log("Programa Finalizado.")
    }
}

function comprarEntradas() {

    let cantidadEntradasRecital1 = 0;
    let cantidadEntradasRecital2 = 0;
    let cantidadEntradasRecital3 = 0;
    let cantidadEntradasRecital4 = 0;
    let cantidadEntradasRecital5 = 0;
    let cantidadEntradasRecital6 = 0;
    let entradasDisponiblesRecital1;
    let entradasDisponiblesRecital2;
    let entradasDisponiblesRecital3;
    let entradasDisponiblesRecital4;
    let entradasDisponiblesRecital5;
    let entradasDisponiblesRecital6;
    let totalDeCompra = 0;
    let seguirComprando = "Si";
    let codigoDescuento = ""
    let descuento = 0;
    let compraFinal = 0;

    // INICIA COMPRA
    while (seguirComprando === "Si" || seguirComprando === "si"){

        // INGRESA CONCIERTO DESEADO DE LOS QUE SE ENCUENTRAN EN LA LISTA, QUE VIENE DESDE LA CLASE "RECITAL"
        let recital = prompt("Ingrese el concierto que desea: \n\n_" + recital1.nombre + "\n_" + recital2.nombre + "\n_" + recital3.nombre + "\n_" + recital4.nombre + "\n_" + recital5.nombre + "\n_" + recital6.nombre);

        // SI EL RECITAL INDICADO PERTENECE A LA LISTA DE LOS RECITALES DISPONIBLES
        if (recital === recital1.nombre || recital === recital2.nombre || recital === recital3.nombre || recital === recital4.nombre || recital === recital5.nombre || recital === recital6.nombre) {

            switch (recital) {
    
                // RECITAL UNO
                case recital1.nombre:
                    
                    // ENTRADAS DISPONIBLES DEL RECITAL
                    entradasDisponiblesRecital1 = recital1.capacidad - cantidadEntradasRecital1;

                    console.log("Cantidad de entradas: " + entradasDisponiblesRecital1);

                    // CANTIDAD DE ENTRADAS QUE PIDE EL USUARIO
                    cantidadEntradasRecital1 = parseInt(prompt("Ingrese la cantidad de entradas que desea: "));

                    // SI LAS ENTRADAS DISPONIBLES SON MENOS QUE LAS ENTRADAS QUE PIDE EL USUARIO
                    if (entradasDisponiblesRecital1 < cantidadEntradasRecital1) {
    
                        console.log("Cantidad de entradas no disponibles")
    
                    // SI LAS ENTRADAS DISPONIBLES SON MAS QUE LAS ENTRADAS QUE PIDE EL USUARIO
                    } else {

                        // PREGUNTA SI EL USUARIO CUENTA CON UN CODIGO DE DESCUENTO
                        codigoDescuento = prompt("¿Cuenta con un codigo de descuento?");

                        // SI CUENTA CON UN CODIGO DE DESCUENTO
                        if(codigoDescuento === "Si" || codigoDescuento === "si"){

                            codigoDescuento = prompt("Ingrese el codigo de descuento: ")

                            // SI EL CODIGO DE DESCUENTO ES CORRECTO
                            if(codigoDescuento === "PazCarrara2022"){

                                // DESCUENTO EN EL TOTAL DE LA/LAS ENTRADAS QUE PIDE EL USUARIO
                                descuento = ((recital1.precio * cantidadEntradasRecital1) * 50) / 100;
                                
                                totalDeCompra = recital1.precio * cantidadEntradasRecital1 - descuento;

                                // MUESTRA DATOS DEL RECITAL, LA CANTIDAD DE ENTRADAS, EL DESCUENTO Y EL TOTAL DE LA COMPRA:
                                recital1.mostrarLista();
                                console.log("Cantidad de entradas: " + cantidadEntradasRecital1 + "\nDescuento: $" + descuento +                       "\nTotal de la compra: $" + totalDeCompra);

                                // SI EL CODIGO DE DESCUENTO ES INCORRECTO
                            } else {
                                
                                console.log("Codigo de descuento INCORRECTO");
                            }

                        // SI NO TIENE UN CODIGO DE DESCUENTO
                        } else{

                            // PRECIO DE LA ENTRADAS POR LA CANTIDAD DE ENTRADAS QUE PIDIO
                            totalDeCompra = recital1.precio * cantidadEntradasRecital1;

                            // MUESTRA DATOS DEL RECITAL, LA CANTIDAD DE ENTRADAS Y EL TOTAL DE LA COMPRA:
                            recital1.mostrarLista();
                            console.log("Cantidad de entradas: " + cantidadEntradasRecital1 + "\nTotal de la compra: $" + totalDeCompra);
                        }
                    }
                break;

                // RECITAL UNO
                case recital2.nombre:

                    // ENTRADAS DISPONIBLES DEL RECITAL
                    entradasDisponiblesRecital2 = recital2.capacidad - cantidadEntradasRecital2;

                    console.log("Cantidad de entradas: " + entradasDisponiblesRecital2);
    
                    // CANTIDAD DE ENTRADAS QUE PIDE EL USUARIO
                    cantidadEntradasRecital2 = parseInt(prompt("Ingrese la cantidad de entradas que desea: "));
    
                    // SI LAS ENTRADAS DISPONIBLES SON MENOS QUE LAS ENTRADAS QUE PIDE EL USUARIO

                    // SI LA CANTIDAD DE ENTRADAS DISPONIBLES SON MENOS QUE LA CANTIDAD DE ENTRADAS QUE PIDE EL USUARIO
                    if (entradasDisponiblesRecital2 < cantidadEntradasRecital2) {
    
                        console.log("Cantidad de entradas no disponibles")
    
                    // SI LA CANTIDAD DE ENTRADAS DISPONIBLES SON MÁS QUE LA CANTIDAD DE ENTRADAS QUE PIDE EL USUARIO    
                    } else {

                        // USUARIO INGRESA SI TIENE UN CODIGO DE DESCUENTO
                        codigoDescuento = prompt("¿Cuenta con un codigo de descuento?");

                        // SI TIENE CODIGO DE DESCUENTO
                        if(codigoDescuento === "Si" || codigoDescuento === "si"){

                            codigoDescuento = prompt("Ingrese el codigo de descuento: ")

                            // CODIGO DE DESCUENTO CORRECTO
                            if(codigoDescuento === "ConociendoRusia2022"){

                                // REALIZA EL DESCUENTO DE LA COMPRA
                                descuento = ((recital2.precio * cantidadEntradasRecital2) * 50) / 100;
                                
                                totalDeCompra = recital2.precio * cantidadEntradasRecital2 - descuento;

                                // MUESTRA DATOS DEL RECITAL, LA CANTIDAD DE ENTRADAS PEDIDAS, DESCUENTO Y TOTAL DE LA COMPRA
                                recital2.mostrarLista();
                                console.log("Cantidad de entradas: " + cantidadEntradasRecital2 + "\nDescuento: $" + descuento +                       "\nTotal de la compra: $" + totalDeCompra);

                            // CODIGO DE DESCUENTO INCORRECTO
                            } else {
                                
                                console.log("Codigo de descuento INCORRECTO");
                            }

                        // SI NO TIENE CODIGO DE DESCUENTO
                        } else{

                            totalDeCompra = recital2.precio * cantidadEntradasRecital2;

                            // MUESTRA DATOS DEL RECITAL, CANTIDAD DE ENTRADAS PEDIDAS, Y TOTAL DE LA COMPRA
                            recital2.mostrarLista();
                            console.log("Cantidad de entradas: " + cantidadEntradasRecital2 + "\nTotal de la compra: $" + totalDeCompra);
                        }
                    }
                break;
                
                // RECITAL TRES
                case recital3.nombre:

                    // ENTRADAS DISPONIBLES
                    entradasDisponiblesRecital3 = recital3.capacidad - cantidadEntradasRecital3;

                    console.log("Cantidad de entradas: " + entradasDisponiblesRecital3);
    
                    // USUARIO INGRESA LA CANTIDAD DE ENTRADAS QUE DESEA
                    cantidadEntradasRecital3 = parseInt(prompt("Ingrese la cantidad de entradas que desea: "));
    
                    // SI LA CANTIDAD DE ENTRADAS DISPONIBLES SON MENOS QUE LA CANTIDAD QUE PIDE EL USUARIO
                    if (entradasDisponiblesRecital3 < cantidadEntradasRecital3) {
    
                        console.log("Cantidad de entradas no disponibles")

                    // SI LA CANTIDAD DE ENTRADAS DISPONIBLES SON MÁS QUE LA CANTIDAD QUE PIDE EL USUARIO
                    } else {

                        // PREGUNTA SI EL USUARIO CUENTA CON UN CODIGO DE DESCUENTO
                        codigoDescuento = prompt("¿Cuenta con un codigo de descuento?");

                        // SI CUENTA CON UN CODIGO DE DESCUENTO
                        if(codigoDescuento === "Si" || codigoDescuento === "si"){

                            codigoDescuento = prompt("Ingrese el codigo de descuento: ")

                            // CODIGO DE DESCUENTO CORRECTO
                            if(codigoDescuento === "PaulaPrieto2022"){

                                // REALIZA DESCUENTO EN LA COMPRA
                                descuento = ((recital3.precio * cantidadEntradasRecital3) * 50) / 100;
                                
                                totalDeCompra = recital3.precio * cantidadEntradasRecital3 - descuento;

                                // MUESTRA DATOS DEL CONCIERTO, CANTIDAD DE ENTRADAS PEDIDAS, DESCUENTO Y TOTAL
                                recital3.mostrarLista();
                                console.log("Cantidad de entradas: " + cantidadEntradasRecital3 + "\nDescuento: $" + descuento +                       "\nTotal de la compra: $" + totalDeCompra);

                            // CODIGO DE DESCUENTO INCORRECTO
                            } else {
                                
                                console.log("Codigo de descuento INCORRECTO");
                            }

                        // SI NO CUENTA CON CODIGO DE DESCUENTO
                        } else{

                            totalDeCompra = recital3.precio * cantidadEntradasRecital3;

                                // MUESTRA DATOS DEL CONCIERTO, CANTIDAD DE ENTRADAS PEDIDAS Y TOTAL
                            recital3.mostrarLista();
                            console.log("Cantidad de entradas: " + cantidadEntradasRecital3 + "\nTotal de la compra: $" + totalDeCompra);
                        }
                    }
                break;
                
                // RECITAL 4
                case recital4.nombre:

                    // ENTRADAS DISPONIBLES
                    entradasDisponiblesRecital4 = recital4.capacidad - cantidadEntradasRecital4;

                    console.log("Cantidad de entradas: " + entradasDisponiblesRecital4);
    
                    // USUARIO INGRESA LA CANTIDAD DE ENTRADAS QUE DESEA
                    cantidadEntradasRecital4 = parseInt(prompt("Ingrese la cantidad de entradas que desea: "));
                    
                    // SI LA CANTIDAD DE ENTRADAS DISPONIBLES SON MENOS QUE LAS QUE PIDE EL USUARIO
                    if (entradasDisponiblesRecital4 < cantidadEntradasRecital4) {
    
                        console.log("Cantidad de entradas no disponibles")
                        
                    // SI LA CANTIDAD DE ENTRADAS DISPONIBLES SON MÁS QUE LAS QUE PIDE EL USUARIO                    
                    } else {

                        // USUARIO INGRESA SI CUENTA CON UN CODIGO DE DESCUENTO
                        codigoDescuento = prompt("¿Cuenta con un codigo de descuento?");

                        // SI CUENTA CON CODIGO DE DESCUENTO
                        if(codigoDescuento === "Si" || codigoDescuento === "si"){

                            codigoDescuento = prompt("Ingrese el codigo de descuento: ")

                            // CODIGO DE DESCUENTO CORRECTO
                            if(codigoDescuento === "ZoeGotusso2022"){

                                // DESCUENTO EN EL TOTAL DE LA COMPRA
                                descuento = ((recital4.precio * cantidadEntradasRecital4) * 50) / 100;
                                
                                totalDeCompra = recital4.precio * cantidadEntradasRecital4 - descuento;

                                // MUESTRA LOS DATOS DEL RECITAL, LA CANTIDAD DE ENTRADAS PEDIDAS, EL DESCUENTO Y TOTAL
                                recital4.mostrarLista();
                                console.log("Cantidad de entradas: " + cantidadEntradasRecital4 + "\nDescuento: $" + descuento +                       "\nTotal de la compra: $" + totalDeCompra);

                            // CODIGO DE DESCUENTO INCORRECTO
                            } else {
                                
                                console.log("Codigo de descuento INCORRECTO");
                            }

                        // SI NO CUENTA CON UN CODIGO DE DESCUENTO
                        } else{
                            
                            totalDeCompra = recital4.precio * cantidadEntradasRecital4;

                            // MUESTRA LOS DATOS DEL RECITAL, LA CANTIDAD DE ENTRADAS PEDIDAS Y TOTAL
                            recital4.mostrarLista();
                            console.log("Cantidad de entradas: " + cantidadEntradasRecital4 + "\nTotal de la compra: $" + totalDeCompra);
                        }
                    }
                break;

                // RECITAL 5
                case recital5.nombre:

                    // ENTRADAS DISPONIBLES
                    entradasDisponiblesRecital5 = recital5.capacidad - cantidadEntradasRecital5;

                    console.log("Cantidad de entradas: " + entradasDisponiblesRecital5);
    
                    // USUARIO INGRESA LA CANTIDAD DE ENTRADAS QUE DESEA
                    cantidadEntradasRecital5 = parseInt(prompt("Ingrese la cantidad de entradas que desea: "));
                    
                    // SI LAS ENTRADAS DISPONIBLES SON MENOS QUE LA CANTIDAD QUE PIDE EL USUARIO
                    if (entradasDisponiblesRecital5 < cantidadEntradasRecital5) {
    
                        console.log("Cantidad de entradas no disponibles")
                    
                    // SI LAS ENTRADAS DISPONIBLES SON MÁS QUE LA CANTIDAD QUE PIDE EL USUARIO                    
                    } else {

                        codigoDescuento = prompt("¿Cuenta con un codigo de descuento?");

                        // SI EL USUARIO CUENTA CON UN CODIGO DESCUENTO                        
                        if(codigoDescuento === "Si" || codigoDescuento === "si"){

                            codigoDescuento = prompt("Ingrese el codigo de descuento: ")

                            // CODIGO DE DESCUENTO CORRECTO
                            if(codigoDescuento === "Leiva2022"){

                                // DESCUENTO EN LA COMPRA TOTAL
                                descuento = ((recital5.precio * cantidadEntradasRecital5) * 50) / 100;
                                
                                totalDeCompra = recital5.precio * cantidadEntradasRecital5 - descuento;

                                // MUESTRA LOS DATOS DEL RECITAL, CANTIDAD DE ENTRADAS PEDIDAS, DESCUENTO Y TOTAL DE LA COMPRA
                                recital5.mostrarLista();
                                console.log("Cantidad de entradas: " + cantidadEntradasRecital5 + "\nDescuento: $" + descuento +                       "\nTotal de la compra: $" + totalDeCompra);

                            // CODIGO DE DESCUENTO INCORRECTO
                            } else {
                                
                                console.log("Codigo de descuento INCORRECTO");
                            }
                        
                        // SI NO CUENTA CON CODIGO DE DESCUENTO
                        } else{

                            totalDeCompra = recital5.precio * cantidadEntradasRecital5;

                            // MUESTRA LOS DATOS DEL RECITAL, CANTIDAD DE ENTRADAS PEDIDAS Y TOTAL DE LA COMPRA
                            recital5.mostrarLista();
                            console.log("Cantidad de entradas: " + cantidadEntradasRecital5 + "\nTotal de la compra: $" + totalDeCompra);
                        }
                    }
                break;
                
                // RECITAL 6
                case recital6.nombre:

                    // CANTIDAD DE ENTRADAS DISPONIBLES
                    entradasDisponiblesRecital6 = recital6.capacidad - cantidadEntradasRecital6;

                    console.log("Cantidad de entradas: " + entradasDisponiblesRecital6);
    
                    // USUARIO INGRESA LA CANTIDAD DE ENTRADAS QUE DESEA
                    cantidadEntradasRecital6 = parseInt(prompt("Ingrese la cantidad de entradas que desea: "));
    
                    // SI LA CANTIDAD DE ENTRADAS DISPONIBLES ES MENOR A LAS QUE PIDE EL USARIO
                    if (entradasDisponiblesRecital6 < cantidadEntradasRecital6) {
    
                        console.log("Cantidad de entradas no disponibles")
                        
                    // SI LA CANTIDAD DE ENTRADAS DISPONBILES SON MAS A LAS QUE PIDE EL USUARIO
                    } else {
                        
                        codigoDescuento = prompt("¿Cuenta con un codigo de descuento?");

                        // SI CUENTA CON CODIGO DE DESCUENTO
                        if(codigoDescuento === "Si" || codigoDescuento === "si"){
                            
                            codigoDescuento = prompt("Ingrese el codigo de descuento: ")

                            // CODIGO DE DESCUENTO CORRECTO
                            if(codigoDescuento === "Miranda2022"){

                                // DESCUENTO EN FINAL DE LA COMPRA
                                descuento = ((recital6.precio * cantidadEntradasRecital6) * 50) / 100;
                                
                                totalDeCompra = recital6.precio * cantidadEntradasRecital6 - descuento;

                                // MUESTRA LOS DATOS DEL RECITAL, CANTIDAD DE ENTRADAS DISPONIBLES, DESCUENTO, Y TOTAL DE LA COMPRA.
                                recital6.mostrarLista();
                                console.log("Cantidad de entradas: " + cantidadEntradasRecital6 + "\nDescuento: $" + descuento +                       "\nTotal de la compra: $" + totalDeCompra);

                            // CODIGO DE DESCUENTO INCORRECTO
                            } else {
                                
                                console.log("Codigo de descuento INCORRECTO");
                            }
                        
                        // NO CUENTA CON CODIGO DE DESCUENTO
                        } else{

                            totalDeCompra = recital6.precio * cantidadEntradasRecital6;

                            // MUESTRA LOS DATOS DEL RECITAL, CANTIDAD DE ENTRADAS PEDIDAS Y TOTAL DE LA COMPRA
                            recital6.mostrarLista();
                            console.log("Cantidad de entradas: " + cantidadEntradasRecital6 + "\nTotal de la compra: $" + totalDeCompra);
                        }
                    }
                break;

                // SI EL USUARIO NO INGREA UN  RECITAL DISPOBIBLE
                default :
                    console.log("Recital no encontrado.")
                break;
            }
        }

        // SUMA DE TODAS LAS ENTRADAS COMPRADAS POR EL USUARIO
        compraFinal = compraFinal + totalDeCompra;

        // PREGUNTA SI EL USUARIO VA A SEGUIR COMPRANDO 
        seguirComprando = prompt("Desea seguir comprando: \nSi \nNo");
    }
    
    // COMPRA FINAL DE LA COMPRA DE TODAS LAS ENTRADAS QUE COMPRA EL USUARIO
    console.log("La compra final es de: $" + compraFinal);

    // SI NO QUIERE COMPRAR MAS ENTRADAS, INICIA LA FUNCION DE COMPRAR ENTRADAS, DONDE SIMULARIA PODER CERRAR SU SESIÓN.
    iniciarCompra();
}

// SE EJECUTA LA FUNCIÓN DE INCIAR COMPRA
iniciarCompra();


