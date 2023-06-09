/*exo 2 - Lanceur de balles de tennis
Réalisez l’algorithme d’un lanceur de balles de tennis. Ce lanceur possède 
deux états (variables) :
–pret : permet de savoir si le tennisman est prêt. Il ne faut pas lancer de balles 
dans le cas contraire
–panierVide : permet de savoir s’il y a encore des balles disponibles
Le lanceur de balle possède l’opération « lancerBalle » qui, vous l’aurez
compris, permet de lancer une balle.
*/

let ready = true;
let panierVide = false;

if (ready){
    if(!panierVide){
        console.log("Launch Ball!")
    } 
    else{
    console.log("The panier is empty!")
    }
}
else{
    console.log("The player is not ready!")
}

