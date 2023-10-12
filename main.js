const el = document.getElementById("poster")
// Medidas del elemento
const height = el.clientHeight
const width = el.clientWidth

// Escuchamos el evento cuando
// tenemos el ratón encima
el.addEventListener("mousemove", (evt) => {
  // Recuperamos las coordenadas del
  // ratón dentro de este elemento
  const { layerX, layerY } = evt

  // Hacemos un cálculo para saber
  // la rotación que tenemos que tener 
  // vertical y horizontalmente
  const yRotation = (
    (layerX - width / 2) / width
  ) * 20
  const xRotation = (
    (layerY - height / 2) / height
  ) * 20
  // Con esto ⬆ creamos una cadena de
  // texto con todas las transformaciones
  // que necesitamos

  // ⬇ lo aplicamos en los estilos en línea
  // de nuestro elemento
  const string = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)
    `

    el.style.transform = string

})

// Detectamos cuando el cursor 
// sale del elemento para resetear
// todas las animaciones que hemos puesto
el.addEventListener("mouseout", () => {
  el.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)
    `
})