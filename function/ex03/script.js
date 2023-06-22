//3. Implémentez une méthode pour ajouter un élément à la fin d'un tableau.
// let friends = ["Tina","Mary","John"]
// let Name = "Lily"

// const addName = function (array){
//     array.push(Name);
//     return array
// }


// console.log(addName(friends))

//Declaration
function addElementToTab(tableau, element){
    let tailleTableau = tableau.length
    let newTableau = tableau
    newTableau[tailleTableau]= element

    return newTableau
}

//Appel
let tab = [1,2,3,4]
let valeurToAdd = 5

let tab2 = addElementToTab(tab, valeurToAdd)
console.log(tab2)
