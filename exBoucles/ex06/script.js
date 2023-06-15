/*Exo 6
À l’aide de la boucle au choix Faire, réalisez un algorithme calculant le résultat de N10. N 
étant un nombre saisi par l’utilisateur.
*/

let result = 1
let valueUser = parseInt(prompt("Enter a number: "))
let counter = 0

while (counter<10) {
    result = result * valueUser
    counter ++
}
console.log(`${valueUser} exposant 10 = ${result}`)


/*
for (let i=0; i<10; i++){
    result = result * valueUser;
}

console.log(`${valueUser} exposant 10 = ${result}`)
*/
