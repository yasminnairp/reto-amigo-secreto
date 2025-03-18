// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agrega amigos
function agregarAmigo () { 
let nombreAmigo = document.getElementById("amigo").value;

if (nombreAmigo.trim() === ""){
    alert("Por favor, inserte un nombre");
}    else {
    amigos.push(nombreAmigo);
    document.querySelector("amigo").value = "";
    mostrarListaAmigo();
}
}

//Actualiza la lista de amigos
