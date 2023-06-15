//4. Écrivez une méthode pour calculer la somme des éléments d'un tableau 
// de nombres.

function calSum (array){
    let result = 0;
    for (let i=0; i<array.length; i++)
    {
        result = result + array[i];
    }
    return result;
}

let numbers = [5,6,7];
console.log(calSum(numbers));

