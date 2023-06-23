// //affichage de toute proprietes de objects

// let displayProp = document.getElementById("displayProp")

// console.log(displayProp)

// for(let item in displayProp){
//     document.getElementById("displayProp").innerHTML+=
//     "<br>" + item + " =>" + displayProp[item]
// }

// let collectionLi = document.getElementsByClassName("menu");

// console.log(collectionLi)
// console.log("*************************")

//  for(let item in collectionLi){
//     console.log(collectionLi[item])
//  }
//  console.log("*************************")



// let collectionLi2 = document.getElementsByTagName("li");

// console.log(collectionLi2)
// console.log("*************************")

//  for(let item in collectionLi2){
//     console.log(collectionLi2[item])
//  }
//  console.log("*************************")

 
// let newLi = document.createElement("li")
// // ajouter une valeur a l'interieur
// newLi.innerHTML = "Salade"
// //recupere ma liste
// let maListe = document.getElementById("maListe")

// maListe.appendChild(newLi)

// console.log(newLi)

// //#region insert before
// let newLi = document.createElement("li")

// //je lui ajoute une valeur a l'interieur
// newLi.innerHTML="InsertBefore"

// //Je recupere ma lastItem
// let maListe = document.getElementById("maListe")
// let lastItem = document.getElementById("lastItem")

// //J'ajoute un element avant
// maListe.insertBefore(newLi,lastItem)

// //#endregion

// //#region insertAdjacentHTML

// let maListe = document.getElementById("maListe")
// maListe.insertAdjacentHTML("beforebegin","<h1>beforebegin</h1>")
// maListe.insertAdjacentHTML("afterbegin","<li>afterbegin</li>")
// maListe.insertAdjacentHTML("beforeend","<li>beforeend</li>")
// maListe.insertAdjacentHTML("afterend","<h1>afterend</h1>")
// //#endregion

//#region Replace Child

// //Creation du nouvel element
// let newElement = document.createElement("li")
// newElement.innerHTML = "newElement"

// //recuperation de la list
// let maListe = document.getElementById("maListe")

// //recupaeration du noeud a modifier
// let elementToUpdate = maListe.childNodes[1]

// //remplacement du noeud existant par le nouveau
// maListe.replaceChild(newElement, elementToUpdate)

// //#endregion

//#region Remove Child

//recuperation de la list
let maListe = document.getElementById("maListe")

//recupaeration du noeud a modifier
let elementToRemove = maListe.childNodes[1]

//remove
maListe.removeChild(elementToRemove)

//#endregion

//#region

