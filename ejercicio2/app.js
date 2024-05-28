//2.1 Inserta dinamicamente en un html un div vacio con javascript.
document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
document.getElementsByTagName("body")[0].appendChild(document.createElement("div")).appendChild(document.createElement("p"));

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divvacio = document.createElement("div");
for (let i = 0; i < 6; i++) {
    divvacio.appendChild(document.createElement("p"))
}
document.getElementsByTagName("body")[0].appendChild(divvacio);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
document.getElementsByTagName("body")[0].appendChild(document.createElement("p")).innerHTML = "Soy dinámico!";

//2.5 Inserta en el h2 con la clase.fn - insert - here el texto 'Wubba Lubba dub dub'.
document.getElementsByClassName("fn-insert-here")[0].innerHTML = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
    ul.appendChild(document.createElement("li")).innerHTML = apps[i];
}
document.getElementsByTagName("body")[0].appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase.fn - remove - me
let eliminar = document.getElementsByClassName("fn-remove-me");
for (let i = eliminar.length - 1; i >= 0; i--) {
    //eliminar[i].remove();
    console.log(eliminar[i]);
    eliminar[i].remove()
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con.appendChild.
let primero = document.getElementsByTagName("div")[0];
let elemento = document.createElement("p")
elemento.innerHTML = "Voy en medio!";

primero.insertAdjacentElement('afterbegin', elemento)

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase  .fn - insert - here

let insertar = document.getElementsByClassName("fn-insert-here");
for (let i = 0; i < insertar.length; i++) {
    let add = document.createElement("p");
    add.innerHTML = "Voy dentro!";
    insertar[i].appendChild(add);
}