

const baseUrl ="https://rickandmortyapi.com/api/"


// SECCION RESULTADOS
const sectionResultadosPersonajes= document.querySelector (".section-resultados-personajes")
const sectionResultadosEpisodios= document.querySelector (".section-resultados-episodios")
const sectionResultadosUbicaciones= document.querySelector (".section-resultados-ubicaciones")
const sectionDetallePersonaje= document.querySelector(".section-detalle-personaje")

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
    sectionResultadosUbicaciones= "none";
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
fetch ("")
.then (res=>res.json()))
.then ((data)=>{
console.log(data)
})
*/

//https://rickandmortyapi.com/api/character
//https://rickandmortyapi.com/api/location
//https://rickandmortyapi.com/api/episode

/*
sectionResultadosPersonajes.style.display= none
sectionResultadosEpisodios.style.display= none
sectionResultadosUbicaciones.style.display= none
sectionDetallePersonaje.style.display= none
*/
