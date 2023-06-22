//4. Écrivez une méthode pour calculer la somme des éléments d'un tableau 
// de nombres.

// function calSum (array){
//     let result = 0;
//     for (let i=0; i<array.length; i++)
//     {
//         result = result + array[i];
//     }
//     return result;
// }

// let numbers = [5,6,7];
// console.log(calSum(numbers));

//declaration
function getSomme(tableau){
    let somme = 0
    for (let i = 0; i < tableau.length; i++){
        somme += tableau[i]
    }
    return somme
}

//Appel
let monTab = [3,3,3,3,3]

let result = getSomme(monTab)
console.log("La somme de mon tableau est de " + result)