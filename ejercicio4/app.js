//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
let boton = document.getElementById("btnToClick");
boton.addEventListener("click", function () {
    console.log(this);
})
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let focus = document.querySelector(".focus");
focus.addEventListener("focus", function () {
    console.log(this.value);
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let input = document.querySelector(".value");
input.addEventListener("input", function () {
    console.log(this.value);
})
//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];
let lista = document.createElement("ul");
for (let i = 0; i < albums.length; i++) {
    lista.appendChild(document.createElement("li")).innerHTML = albums[i];
}
document.getElementsByTagName("body")[0].appendChild(lista)