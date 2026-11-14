const precios = {
    "Bogotá": 300000,
    "Santa Marta": 500000,
    "Cartagena": 600000
};

const formulario = document.getElementById("formViaje");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const destino = document.getElementById("destino").value;
    const personas = Number(document.getElementById("personas").value);
    const resultado = document.getElementById("resultado");

    if (nombre === "" || destino === "" || personas <= 0) {
        resultado.textContent = "Complete correctamente todos los campos.";
        return;
    }

    const precioPersona = precios[destino];
    const total = precioPersona * personas;

    resultado.innerHTML = 
        "<strong>Solicitud registrada</strong><br>" +
        "Cliente: " + nombre + "<br>" +
        "Destino: " + destino + "<br>" +
        "Personas: " + personas + "<br>" +
        "Total aproximado: $" + total.toLocaleString("es-CO");
});