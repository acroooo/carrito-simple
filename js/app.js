// lista-curso

let carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let listaCurso = document.querySelector('#lista-cursos')
let cursos = document.querySelectorAll('.card')
let articulosCarro = []

cargarEventListeners()
function cargarEventListeners () {
    // dispara cuando se presiona agregar al carrito
    listaCurso.addEventListener('click', agregarCurso)
}

// Functions
function agregarCurso (e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        const datos = leerDatosCurso(e.target.parentElement.parentElement)
        
        // añade elementos al arreglo de carrito
        articulosCarro = [...articulosCarro, datos]
    }
}

function leerDatosCurso (element) {

    const infoCurso = {
        imagen: element.querySelector('img').src,
        titulo: element.querySelector('h4').textContent,
        precio: element.querySelector('.precio span').textContent,
        id: element.querySelector('a').getAttribute('data-id')
    }

    return infoCurso
}



