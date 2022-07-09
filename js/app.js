import Persona from "./personaClass.js";

let nombre = document.querySelector("#nombre");
let edad = document.querySelector("#edad");
let dni = document.querySelector("#dni");
let genero = document.querySelector("#genero");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let formGeneraciones = document.querySelector("#formGeneraciones");
let fechaNacimiento = document.querySelector("#fechaNacimiento");
let alerta = document.querySelector("#alerta");
let btnmostrarDatos = document.querySelector("#mostrarDatos");
let btnmostrarGeneracion = document.querySelector("#mostrarGeneracion");

formGeneraciones.addEventListener("submit", generaciones);

function generaciones(e) {
  e.preventDefault();
  console.log("desde generaciones");
  if (
    nombre.value.trim().length > 0 &&
    edad.value.trim().length > 0 &&
    dni.value.trim().length > 0 &&
    fechaNacimiento.value.trim().length > 0
  ) {
    // creo el objeto persona
    const personaNueva = new Persona(
      nombre.value,
      edad.value,
      genero.value,
      peso.value,
      altura.value,
      fechaNacimiento.value
    );
    //reseteo los datos del formulario y los detalles
    resetearDatos();
    // mostramos opciones para la persona creada
    let datosExtras = document.querySelector("#datosExtras");
    datosExtras.className = "container bg-light my-4 rounded-3";
    // agregar el nombre de la persona en la seccion de detalle
    datosExtras.children[0].children[0].innerHTML = `<i class="bi bi-person-badge"></i> Persona: ${personaNueva.mostrarNombre}`;
    // opciones para agregar un manejador de eventos en un boton
    btnmostrarDatos.addEventListener("click", () =>
      mostrarDatosPersona(personaNueva)
    );
    btnmostrarGeneracion.addEventListener("click", () => {
      let panelDatos = document.querySelector("#detalle");
      panelDatos.innerHTML = personaNueva.mostrarGeneracion();
    });
  } else {
    alerta.innerHTML = "Debe cargar todos los datos";
  }
}

function resetearDatos() {
  formGeneraciones.reset();
  document.querySelector("#detalle").innerHTML = "";
}

function mostrarDatosPersona(persona) {
  let panelDatos = document.querySelector("#detalle");
  panelDatos.innerHTML = persona.mostrarDatos();
}
