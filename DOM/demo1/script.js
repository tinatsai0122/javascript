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

 
let newLi = document.createElement("li")
// ajouter une valeur a l'interieur
newLi.innerHTML = "Salade"
//recupere ma liste
let maListe = document.getElementById("maListe")

maListe.appendChild(newLi)

console.log(newLi)
