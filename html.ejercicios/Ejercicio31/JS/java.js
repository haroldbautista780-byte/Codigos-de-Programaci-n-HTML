const botonesOferta = document.querySelectorAll(".btn-oferta");
const detalleOferta = document.getElementById("detalleOferta");

botonesOferta.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const titulo = boton.parentElement.querySelector("h3").textContent;
        
        detalleOferta.textContent = 
            "Oferta seleccionada: " + titulo + 
            ". Revise los requisitos antes de postularse.";
    });
});

const formulario = document.getElementById("formPostulacion");
const contadorElemento = document.getElementById("contador");
let contador = 0;

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const cargo = document.getElementById("cargo").value;
    const mensaje = document.getElementById("mensaje");

    if (nombre === "" || correo === "" || cargo === "") {
        mensaje.textContent = 
            "Debe completar nombre, correo y cargo.";
        return;
    }

    contador++;
    contadorElemento.textContent = contador;

    mensaje.textContent = 
        "Postulación enviada correctamente. Gracias, " + 
        nombre + ".";

    formulario.reset();
});