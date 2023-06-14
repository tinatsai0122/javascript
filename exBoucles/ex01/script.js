//#region Ex1 with for
/*Exo 1
À l’aide d’une boucle, affichez la table de multiplication par 2*/
/*
let number = 2

for (i = 1; i<=10; i++){
    let result = number * i
    console.log(`${number} x ${i}=${result}`)
}

//#endregion

//#region Ex1 with while
/*Exo 1
À l’aide d’une boucle, affichez la table de multiplication par 2*/

/*
let nombre = 2
let i = 1
let resultat

while (i<=10){
    resultat = nombre * i
    console.log(`${nombre} x ${i}=${resultat}`)
    i ++
}

//#endregion


//#region Ex1 with do while
/*Exo 1
À l’aide d’une boucle, affichez la table de multiplication par 2*/

let UserValue
do{
    if(UserValue == undefined){
        UserValue = prompt("Veuillez encoder un nombre.")
    }
    else{
        newMessage = "Something went wrong!"
        UserValue = prompt(newMessage)

    }
}

while(isNaN(UserValue));
console.log("Thank you for inputting the number!")

//#endregion



//#region Ex2
/*Reprenez l’algorithme du lanceur de balles de tennis et faites en sorte qu’il lance une balle tant que le stock n’est pas vide. Il y a donc 2 variables : stockBalles et prê*/

let stockBalles = 5
let pret = true
while (stockBalles >=0 && pret == true){

}



//#endregion