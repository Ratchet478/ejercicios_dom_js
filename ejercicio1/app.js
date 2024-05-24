/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/
let classShowMe = document.querySelector(".showme")
console.log(classShowMe)
/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
let idPillado = document.querySelector("#pillado")
console.log(idPillado)
/*1.3 Usa querySelector para mostrar por consola todos los p*/
let allP = document.querySelectorAll("p")
console.log(allP)
/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */
let allPokemon = document.querySelectorAll(".pokemon")
console.log(allPokemon)
/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".*/
let allTestMe = document.querySelectorAll('*[data-function="testMe"]')
console.log(allTestMe)
/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".*/
let thirdTestMe = allTestMe[2]
console.log(thirdTestMe)
