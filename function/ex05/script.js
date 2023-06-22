// // Declaration
// function extractString(string, position, length) {
//     return string.substr(position, length);
//   }
  
//   // Appel
//   let message = "malheusement";
//   let positionUser = parseInt(prompt("Please choose the starting position (starting from 0): "));
//   let lengthUser = parseInt(prompt("Please choose the length of the substring: "));
  
//   let extractedString = extractString(message, positionUser, lengthUser);
//   console.log(extractedString);


// // Declaration
// function extractString(string, position, length) {
//     let extractedString = "";
    
//     for (let i = position; i < position + length; i++) {
//       extractedString += string[i];
//     }
    
//     return extractedString;
//   }
  
//   // Appel
//   let message = "malheusement";
//   let positionUser = parseInt(prompt("Please choose the starting position (starting from 0): "));
//   let lengthUser = parseInt(prompt("Please choose the length of the substring: "));
  
//   let extractedString = extractString(message, positionUser, lengthUser);
//   console.log(extractedString);
  

//Declaration
function getSousChaine(chaine,position,lengueur){
    let newChaine = ""
    for (let i=position; i<position+lengueur;i++){
        console.log(newChaine)
        newChaine += chaine[i]
    }
    return newChaine
}

//Appel

let valeur = "Ma formation Javascript"

let sousChainValeur = getSousChaine(valeur,3,7)
console.log(sousChainValeur)