/*À l’aide d’une boucle while , améliorez l’algorithme du distributeur de boissons pour qu’il demande au client s’il désire une autre boisson (Tant qu’il en a envie).*/


let stock = {
    coke:10,
    fanta:5,
    coffee:2
};

let drinkUser = parseInt(prompt("Please type the number: \n -(1) Coca-cola \n -(2) Fanta \n -(3) Coffee  "))

/*
while (drinkUser > 4 || drainkUser <1){
    console.log("Invalid Input");
    drinkUser = parseInt(prompt("Please type the number: \n -(1) Coca-cola \n -(2) Fanta \n -(3) Coffee -(4)Nothing "));
}
*/
while (true){
    switch (drinkUser){
        case 1:
            if (stock.coke > 0){
                console.log("Here you are the Coke!");
                stock.coke--;
            }
            else { 
                console.log("The Coke is out of Stock!")
                drinkUser = parseInt(prompt(`Please type the number: \n -(1) Coca-cola (stock = ${stock.coke}) \n -(2) Fanta (stock = ${stock.fanta})\n -(3) Coffee (stock = ${stock.coffee})`))
            }
            break;
        case 2:
            if (stock.fanta > 0){
                console.log("Here you are the Fanta!");
                stock.fanta--;
            }
            else { 
                console.log("The Fanta is out of Stock!");
                drinkUser = parseInt(prompt(`Please type the number: \n -(1) Coca-cola (stock = ${stock.coke}) \n -(2) Fanta (stock = ${stock.fanta})\n -(3) Coffee (stock = ${stock.coffee})`))
            }
            break;
        case 3:
            if (stock.coffee > 0){
                console.log("Here you are the Coffee!");
                stock.coffee--;
            }
            else { 
                console.log("The Coffee is out of Stock!");
                drinkUser = parseInt(prompt(`Please type the number: \n -(1) Coca-cola (stock = ${stock.coke}) \n -(2) Fanta (stock = ${stock.fanta})\n -(3) Coffee (stock = ${stock.coffee})`))
            break;
            }
        default:
            console.log(`The Value: ${drinkUser} is not known.`)
            drinkUser = parseInt(prompt("Please type the number: \n -(1) Coca-cola \n -(2) Fanta \n -(3) Coffee  "))
            break;
    }
}

