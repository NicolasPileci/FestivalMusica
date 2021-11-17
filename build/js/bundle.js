document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija()
})

function navegacionFija() {

    const barra = document.querySelector('.header')

    const observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo')
        } else {
            barra.classList.add('fijo')
        }
    })

    observer.observe(document.querySelector('.sobre-festival'))
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    enlaces.forEach(function(enlace) {                                                // Debemos agregar el evento a cada enlace, no directamente al array
        enlace.addEventListener('click', function(e) {
            e.preventDefault()

            const seccion = document.querySelector(e.target.attributes.href.value)

            seccion.scrollIntoView({
                behavior: 'smooth'                                                    // Scroll suave
            })
        })
    })
    
}
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria(); 
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `build/img/thumb/${i}.jpg`

        imagen.dataset.imagenId = i
        imagen.onclick = mostrarImagen

        const lista = document.createElement('LI')
        lista.appendChild(imagen)

        galeria.appendChild(lista)
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId)

    const imagen = document.createElement('IMG')
    imagen.src = `build/img/grande/${id}.jpg`

    const overlay = document.createElement('DIV')
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')

    overlay.onclick = function() {
        overlay.remove()
        body.classList.remove('fijar-body')
    }

    const cerrarImagen = document.createElement('P')
    cerrarImagen.textContent = 'X'
    cerrarImagen.classList.add('btn-cerrar')

    cerrarImagen.onclick = function() {
        overlay.remove()
        body.classList.remove('fijar-body')
    }

    overlay.appendChild(cerrarImagen)
    imagen.classList.add('overlay-imagen')

    const body = document.querySelector('body')
    body.appendChild(overlay)

    body.classList.add('fijar-body')
}

