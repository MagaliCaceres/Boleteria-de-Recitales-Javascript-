/** ARCHIVO .JSON */

fetch('../JSON/tabla.json')
    .then((response) => {
        return response.json();
    }).then((conciertos) => {

        tbodyTablaConciertos.innerHTML = "";

        for (const concierto of conciertos) {

            // Crear el tr
            const tr = document.createElement("tr");

            // Creamos las columnas
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
            td4.innerText = concierto.precio;
            td4.className = "datos_tabla";

            const td5 = document.createElement("td");
            td5.innerText = concierto.ubicacion;
            td5.className = "datos_tabla_centro";

            const td6 = document.createElement("td");
            td6.innerText = concierto.entradas;
            td6.className = "datos_tabla";

            // Agregar al tr
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);

            // Agregar tr al tbody
            tbodyTablaConciertos.append(tr);
        }
    });

const tbodyTablaConciertos = document.getElementById("respuesta");

const conciertosLS = localStorage.getItem("lista_conciertos");

const conciertos = JSON.parse(localStorage.getItem('lista_conciertos'));

const stock = conciertos.map(concierto => concierto.entradas);


console.log(stock);


for (const cantidad of stock) {

    // Crear el tr
    const tr = document.createElement("tr");

    // Creamos las columnas
    const td7 = document.createElement("td");
    td7.innerText = cantidad
    td7.className = "datos_tabla_centro";

    // Agregar al tr
    tr.append(td7);

    // Agregar tr al tbody
    tbodyTablaConciertos.append(tr);

    console.log(cantidad)
};

    
