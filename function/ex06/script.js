//Écrivez une méthode pour compter le nombre de voyelles dans une chaîne de caractères

// let noVowel=0

// function countVowel(string){
//     const vowels = ["a","i","o","u","e"]
//     for(let i=0; i<string.length; i++){
//         if (vowels.includes(string[i])){
//             noVowel ++; 
//         }
//     }
//     return noVowel
// }

// let message = "malheusement"
// let numberVowels = countVowel(message)
// console.log(numberVowels)

//Declaration
function compteurVoyelles(chaine){
    let voyelles = ["a","e","i","o","u","y"]
    let compteur = 0

    for (let i=0; i<chaine.length;i++){
        if(voyelles.includes(chaine[i].toLowerCase())){
            compteur++
        }
    }
    return compteur
}
//Appel
let message = "Abraracourcix!!!"

console.log(`Le nombre de voyelle pour la chaine (${message}) est de : ${compteurVoyelles(message)}`)



//Appel