// VARIABLES GLOBALES

// contenedor
const tbodyTablaConciertos = document.getElementById("cuerpo_tabla_original");


// CODIGO

// traigo lo que hay en el local storage (lista de conciertos)
const conciertosLS = localStorage.getItem("lista_conciertos");

// lo convierto en un array
const conciertos = JSON.parse(localStorage.getItem('lista_conciertos'));

// separo el atributo ENTRADAS de cada objeto de este array, en un nuevo array
const stock = conciertos.map(concierto => concierto.entradas);


// ARCHIVO .JSON

fetch('../JSON/tabla.json')
    .then((response) => {
        return response.json();
    }).then((conciertos) => {

        tbodyTablaConciertos.innerHTML = "";

        // por cada objeto correspondiente al json
        for (const concierto of conciertos) {

            // Se crea el tr
            const tr = document.createElement("tr");
            tr.setAttribute('id', 'trTabla');

            // Se crean las columnas
            const td1 = document.createElement("td");
            td1.innerText = concierto.nombre
            td1.className = "datos_tabla_centro";

            const td2 = document.createElement("td");
            td2.innerText = concierto.fecha;
            td2.className = "datos_tabla";

            const td3 = document.createElement("td");
            td3.innerText = concierto.horario;
            td3.className = "datos_tabla";

            const td4 = document.createElement("td");
            td4.innerText = "$" + concierto.precio;
            td4.className = "datos_tabla";

            const td5 = document.createElement("td");
            td5.innerText = concierto.ubicacion;
            td5.className = "datos_tabla_centro";

            const td6 = document.createElement("td");
            td6.innerText = concierto.entradas;
            td6.className = "datos_tabla";

            // Agregar los td al tr
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);

            // Agregar tr al tbody
            tbodyTablaConciertos.append(tr);
        }

        // cada valor (entradas disponibles) del array stock
        stock.forEach((cantidad) => {

            // Se trae el tr ya creado
            const tr = document.getElementById("trTabla");

            // Se crean las columnas
            const td7 = document.createElement("td");
            td7.innerText = cantidad
            td7.className = "datos_tabla datos_tabla_color";

            // Agregar el td al tr ya creado
            tr.append(td7);

            // Se agrega tr al tbody
            tbodyTablaConciertos.append(tr);
        });
    });


