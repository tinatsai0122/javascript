let nomProduit 
let prixProduit
let newNomProduit 
let newPrixProduit
let total = 0

let liste = document.getElementById("liste")
let newDiv = document.createElement("div")
let totalPanier = document.getElementById("result")
totalPanier.value = 0

function ajoutProduit(numero){
    // Récupération des informations du produit + concaténation avec le numéro passer en paramètre
    let produit = document.getElementById("produit" + numero)
    nomProduit = produit.childNodes[1].innerHTML
    prixProduit = produit.childNodes[3].innerHTML

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
    total += parseFloat(prixProduit)
    console.log(total)
    totalPanier.value = total
}
