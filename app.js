// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agrega amigos
function agregarAmigo () { 
let nombreAmigo = document.getElementById("amigo").value;

if (nombreAmigo.trim() === ""){
    alert("Por favor, inserte un nombre");
}  else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
} 
}

//Actualiza la lista de amigos
function mostrarListaAmigo(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos [index];
        
        let listaHTML = document.createElement("li");
        listaHTML.textContent =element;
        listaAmigos.appendChild(listaHTML);
    }
}
