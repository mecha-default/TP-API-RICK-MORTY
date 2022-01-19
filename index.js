
// LINK PRESONAJES//
const linkPersonajes = document.getElementById("personajes")
const mostrarPersonajes = ()=>{
    fetch("https://rickandmortyapi.com/api/character?page=1")
    .then(res => res.json())
    .then(data =>{
        mostrarPersonajeEnHTML(data.results)
    })
}
mostrarPersonajes()

const tarjetaPersonaje = document.querySelector(".seccion-personaje")
const mostrarPersonajeEnHTML = (array) => {
    const html = array.reduce((acc,curr)=>{
      return acc = acc + 
      `<div class="card" data-id=${curr.id}>
       <h3>Name: ${curr.name}</h3>
       <img src="${curr.image}"></img>
     </div>`
    },"")

    tarjetaPersonaje.innerHTML = html
    
}  

/*
const baseUrl ="https://rickandmortyapi.com/api/"

*/
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