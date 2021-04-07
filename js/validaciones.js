"use strict";
var formulario = document.getElementById("formulario");
var rut = document.getElementById("rut");
var telefono = document.getElementById("telefono");
var descripcion = document.getElementById("descripcion");
var largotelefono = telefono.toString().trim();
var mensaje = document.getElementById("mensaje");
rut = String(rut);
console.log(typeof rut);
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(telefono.value);
    console.log(largotelefono.length);
    if (rut.search('.') != -1) {
        mensaje.innerHTML = "<p>el rut no debe tener puntos</p>";
        mensaje.style.color = "red";
    }
    if (largotelefono.length != 9) {
        console.log("el numero telefono debe ser de 9 digitos");
        mensaje.innerHTML = "<p>el numero telefono debe ser de 9 digitos</p>";
        mensaje.style.color = "red";
    }
    //if(descripcion.length >= 301){
    //    console.log("La descripcion no puedes ser mas larga que 300 caracteres")
    //}
});
