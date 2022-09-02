// lista-curso

let carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let listaCurso = document.querySelector('#lista-cursos')
let cursos = document.querySelectorAll('.card')

function cargarEventListeners () {
    // dispara cuando se presiona agregar al carrito
    listaCurso.addEventListener('click', agregarCurso)
}

// Functions
function agregarCurso (e) {
    e.preventDefault()
    console.log(e.target)
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Agregado al carrito')

        // h4 -> innerhtml
        
    }
}

cargarEventListeners()
