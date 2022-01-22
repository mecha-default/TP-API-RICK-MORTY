

const baseUrl ="https://rickandmortyapi.com/api/"


// SECCION RESULTADOS
const sectionResultadosPersonajes= document.querySelector (".section-resultados-personajes")
const sectionResultadosEpisodios= document.querySelector (".section-resultados-episodios")
const sectionResultadosUbicaciones= document.querySelector (".section-resultados-ubicaciones")
const sectionDetallePersonaje= document.querySelector(".section-detalle-personaje")

//MENU MOBILE 
const linksNav= document.querySelector(".links-nav")
const menuMobile= document.querySelector(".menu-mobile")
const buscarPersonaje= document.querySelector(".buscar-personaje")

//PAGINADO
let paginaActual = 1
let ultimaPagina = 0
const botonPrevPersonajes = document.querySelector(".prev-personajes")
const botonNextPersonajes = document.querySelector(".next-personajes")


// LINK PERSONAJES//
const linkPersonajes = document.getElementById("personajes")
linkPersonajes.onclick = () => {
    sectionResultadosPersonajes.style.display = "flex";
    sectionResultadosEpisodios.style.display = "none";
    sectionResultadosUbicaciones.style.display= "none";
    sectionDetallePersonaje.style.display = "none";      
    
}
const mostrarPersonajes = ()=>{
    fetch(`${baseUrl}character?page=${paginaActual}`)
    .then(res => res.json())
    .then(data =>{
        mostrarPersonajesEnHTML(data.results)
    })
}
mostrarPersonajes()

const mostrarPersonajesEnHTML = (array) => {
    const html = array.reduce((acc,curr)=>{
      return acc = acc + 
      `<div class="card" data-id=${curr.id}>
       <h3>Name: ${curr.name}</h3>
       <img src="${curr.image}"></img>
     </div>`
    },"")

// IMPLEMENTACION PAGINADO //
   if(paginaActual === 1){
        botonPrevPersonajes.disabled = true}
        else{
            botonPrevPersonajes.disabled = false
        }

    sectionResultadosPersonajes.innerHTML = html  
}  

botonPrevPersonajes.onclick = () => {
    paginaActual--
    if (paginaActual === 1){
        botonPrevPersonajes.disabled = true
    }
    else{
        botonPrevPersonajes.disabled = false
    }
    mostrarPersonajes()
}
botonNextPersonajes.onclick = () => {
    paginaActual++
    if(paginaActual === ultimaPagina){
        botonNextPersonajes.disabled = true
    }
    mostrarPersonajes()

}

/*
const botonPrevEpisodios = document.querySelector(".prev-episodios")
const botonNextEpisodios = document.querySelector(".next-episodios")
const botonPrevUbicaciones = document.querySelector(".prev-ubicaciones")
const botonNextUbicaciones= document.querySelector(".next-ubicaciones")
const paginadoEpisodios = document.querySelector(".paginado-episodios")
const paginadoUbicaciones = document.querySelector(".paginado-ubicaciones")
const paginadoPersonajes = document.querySelector(".paginado-personajes")

LINK EPISODIOS
const linkEpisodios = document.getElementById("episodios")
linkEpisodios.onclick = () => {
    sectionResultadosPersonajes.style.display = "none";
    sectionResultadosEpisodios.style.display = "flex";
    sectionResultadosUbicaciones.style.display= "none";
    sectionDetallePersonaje.style.display = "none";
    paginadoPersonajes.style.display="none";
    paginadoEpisodios.style.display="flex";
    paginadoUbicaciones.style.display= "none";
}
const mostrarEpisodios = ()=>{
    fetch(`${baseUrl}episode?page=${paginaActual}`) 
    .then(res => res.json())
    .then(data =>{
        mostrarEpisodiosEnHTML(data.results)
    })
}
mostrarEpisodios()
const mostrarEpisodiosEnHTML = (episodios) => {
    const contenedorResultadosEpisodios =document.querySelector(".contenedor-resultados-episodios")
    const htmlEpisodios = episodios.reduce((acc,curr)=>{
      return acc = acc + 
      `<div class="card-episodios" data-id=${curr.id}>
      <h3>Name: ${curr.name}</h3>
      <p>Episode: ${curr.episode}</p>
      <img src="img/descarga.jgeg">
      </div>`
    }, "")

//PAGINADO EPISODIOS

    if(paginaActual === 1){
        botonPrevEpisodios.disabled = true}
        else{
            botonPrevEpisodios.disabled = false
        }

    sectionResultadosEpisodios.innerHTML = htmlEpisodios  
}  

botonPrevEpisodios.onclick = () => {
    paginaActual--
    if (paginaActual === 1){
        botonPrevEpisodios.disabled = true
    }
    else{
        botonPrevEpisodios.disabled = false
    }
    mostrarEpisodios()
}
botonNextEpisodios.onclick = () => {
    paginaActual++
    if(paginaActual === ultimaPagina){
        botonNextEpisodios.disabled = true
    }
    mostrarEpisodios()
}

//LINK UBICACIONES
const linkUbicaciones = document.getElementById("ubicaciones")
linkUbicaciones.onclick = () => {
    sectionResultadosPersonajes.style.display = "none";
    sectionResultadosEpisodios.style.display = "none";
    sectionResultadosUbicaciones.style.display= "flex";
    sectionDetallePersonaje.style.display = "none";

}
    
const mostrarUbicaciones = () => {
    fetch(`https://rickandmortyapi.com/api/location?page=${paginaActual}`)
    .then(res => res.json())
    .then(data => {
    mostrarUbicacionesEnHTML(data.results)
    })
    
}
const mostrarUbicacionesEnHTML = (ubicaciones) => {
    const contenedorResultadosUbicaciones = document.querySelector(".contenedor-resultados-ubicaciones")
    const htmlUbicaciones = ubicaciones.reduce((acc,curr) => {
    return acc + `
    <div class="card-ubicaciones">
            <img src="img/descarga.jpeg">
            <h2>${curr.name}</h2>
            <p>${curr.dimension}</p>
            <p>${curr.type}</p>
        </div>`
    }, "")    

//PAGINADO UBICACIONES
    if(paginaActual === 1){
        botonPrevUbicaciones.disabled = true}
        else{
            botonPrevUbicaciones.disabled = false
        }
    sectionResultadosUbicaciones.innerHTML = htmlUbicaciones
}

botonPrevUbicaciones.onclick = () => {
    paginaActual--
    if (paginaActual === 1){
        botonPrevUbicaciones.disabled = true
    }
    else{
        botonPrevUbicaciones.disabled = false
    }
    mostrarUbicaciones()
}
botonNextUbicaciones.onclick = () => {
    paginaActual++
    if(paginaActual === ultimaPagina){
        botonNextUbicaciones.disabled = true
    }
    mostrarUbicaciones()
}
//BUSCAR PERSONAJES
/*
const formPersonaje= document.querySelector (".form-personaje") 
const 
const inputBusquedaPersonaje= document.getElementById("input-busqueda-personaje")


formPersonaje.onsubmit = (e) => {
    e.preventDefault()
    console.log(inputBusquedaPersonaje.value)
    buscarPersonaje(botonBusqueda.value)
    }
   
    const buscarPersonaje = (nombre) => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
        .then(res => res.json())
        .then(data =>{
         HTMLcardPersonaje(data.results)
         console.log(data.results)
        })
    }
*/
//DETALLE PERSONAJE 

//MENU MOBILE
/*buscarPersonaje.onclick = () => {
    linksNav.style.display = "flex";
    menuMobile.style.display = "none"
}
*/
