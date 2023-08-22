let divListe = document.getElementById ("liste");
let nomProduit;
let prixProduit;
let newDiv;
let newSpanNomProduit;
let newSpanPrixProduit;

let inputTotal = document.getElementById ("inputTotal");
inputTotal.value = 0;

function afficher(unId){

    // récuperer nom et prix d'un produit
    // On obtient "produit1", "produit2"... on concatent "produit" avec un id
    let produit = document.getElementById("produit" + unId);
    nomProduit = produit.childNodes[1].innerHTML;
    prixProduit = produit.childNodes[3].innerHTML;

    // rajouter dans un nouveau div contenant 2 spans à l'intérieur du div "liste"
    newDiv = document.createElement("div");
    newSpanNomProduit = document.createElement("span");
    newSpanPrixProduit = document.createElement("span");

    // créer le contenu des spans
    newSpanNomProduit.innerHTML = nomProduit;
    newSpanPrixProduit.innerHTML = prixProduit;

    // rajouter les spans dans leur div et puis rajouter ce div dans la liste
    newDiv.appendChild(newSpanNomProduit);
    newDiv.appendChild(newSpanPrixProduit);

    divListe.appendChild(newDiv);

    // incrémenter le total
    inputTotal.value = parseInt(inputTotal.value) + parseInt(prixProduit);
}



