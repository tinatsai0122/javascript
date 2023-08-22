let nomProduit 
let prixProduit
let newNomProduit 
let newPrixProduit
let total = 0

let liste = document.getElementById("liste")
let newDiv = document.createElement("div")
let totalPanier = document.getElementById("result")
totalPanier.value = 0

function ajoutProduit1(){
    // Récupération des informations du produit + concaténation avec le numéro passer en paramètre
    let produit1 = document.getElementById("produit1")
    nomProduit = produit1.childNodes[1].innerHTML
    prixProduit = produit1.childNodes[3].innerHTML

    // initialisation de la div + 2 span 
    newDiv = document.createElement("div")
    newNomProduit = document.createElement("span")
    newPrixProduit = document.createElement("span")
    
    // Remplissage des span
    newNomProduit.innerHTML = nomProduit
    newPrixProduit.innerHTML = prixProduit

    // ajout des 2 span dans ma nouvelle div
    newDiv.appendChild(newNomProduit)
    newDiv.appendChild(newPrixProduit)

    // ajout de la div a la liste
    liste.appendChild(newDiv)

    // Incrémentation du total + mise a jout dans la vue 
    console.log(prixProduit)
    total += parseFloat(prixProduit)
    console.log(total)
    totalPanier.value = total
}

function ajoutProduit2(){
    let produit2 = document.getElementById("produit2")
    nomProduit = produit2.childNodes[1].innerHTML
    prixProduit = produit2.childNodes[3].innerHTML


    newDiv = document.createElement("div")

    newNomProduit = document.createElement("span")
    newNomProduit.innerHTML = nomProduit

    newPrixProduit = document.createElement("span")
    newPrixProduit.innerHTML = prixProduit

    newDiv.appendChild(newNomProduit)
    newDiv.appendChild(newPrixProduit)
    liste.appendChild(newDiv)

    total += parseFloat(prixProduit)
    console.log(total)
    totalPanier.value = total
}

function ajoutProduit3(){
    let produit3 = document.getElementById("produit3")
    nomProduit = produit3.childNodes[1].innerHTML
    prixProduit = produit3.childNodes[3].innerHTML


    newDiv = document.createElement("div")
    
    newNomProduit = document.createElement("span")
    newNomProduit.innerHTML = nomProduit

    newPrixProduit = document.createElement("span")
    newPrixProduit.innerHTML = prixProduit

    newDiv.appendChild(newNomProduit)
    newDiv.appendChild(newPrixProduit)
    liste.appendChild(newDiv)

    total += parseFloat(prixProduit)
    console.log(total)
    totalPanier.value = total
}