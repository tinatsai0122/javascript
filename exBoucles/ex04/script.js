/*À l’aide d’une boucle while , améliorez l’algorithme du distributeur de boissons pour qu’il demande au client s’il désire une autre boisson (Tant qu’il en a envie).*/


let stock = {
    coke:5,
    fanta:3,
    coffee:0
};

let validInput = false;
let drinkUser;

while(!validInput){
    drinkUser = parseInt(prompt("Please type the number: \n -(1) Coca-cola \n -(2) Fanta \n -(3) Coffee  "))


    switch (drinkUser){
        case 1:
            if (stock.coke > 0){
                console.log("Here you are the Coke!");
                stock.coke--;
                validInput = true;
            }
            else{ 
                console.log("The Coke is out of Stock!")
            }
            break;
        case 2:
            if (stock.fanta > 0){
                console.log("Here you are the Fanta!");
                stock.fanta--;
                validInput=true;
            }
            else{ 
                console.log("The Fanta is out of Stock!");
            }
            break;
        case 3:
            if (stock.coffee > 0){
                console.log("Here you are the Coffee!");
                stock.coffee--;
                validInput=true;
            }
            else { 
                console.log("The Coffee is out of Stock!");
            }
            break;
        default:
            console.log(`The Value: ${drinkUser} is not known.`)
    }
}


