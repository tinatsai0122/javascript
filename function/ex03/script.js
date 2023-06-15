//3. Implémentez une méthode pour ajouter un élément à la fin d'un tableau.
let friends = ["Tina","Mary","John"]
let Name = "Lily"

const addName = function (array){
    array.push(Name);
    return array
}


console.log(addName(friends))