/*À l’aide de deux boucles, affichez les tables de multiplication de 1 à 9*/

let result;
for (let i = 1; i <10; i++) {
    for (let j =1; j<10; j++){
        result = i * j;
        console.log(`${i} * ${j} = ${result}`)
    }
}