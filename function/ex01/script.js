//1. Écrivez une méthode pour vérifier si une chaîne de caractères est vide.


// function stringIsEmpty(string){
//     if (string == ""){
//         return "Empty Value";
//     }else{
//         return string;
//     }
// }

// let messageUser = prompt("Enter a word or message: ") 

// console.log(stringIsEmpty(messageUser));

//declaration
function chaineVide(chaine){
    if (chaine ==""){
        return true
    }
    else{
        return false
    }
}

//Appel
let valeurUser = ""
if (chaineVide(valeurUser)){
    alert("chaine vide!")
}
else{
    alert(`La chain contient: `, valeurUser)
}