document.getElementById('b1').addEventListener('click', presionBoton) // Línea que activa el burbujeo 
document.getElementById('b2').addEventListener('click', presionBoton)
document.getElementById('b3').addEventListener('click', presionBoton) 
document.addEventListener('click', presionDocumento) // Línea que activa el burbujeo

function presionBoton(e) {
    e.stopPropagation()
    let ref = e.target
    alert(ref.value)
}

function presionDocumento(e) {
    alert('se presionó el fondo del documento')
}