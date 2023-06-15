/*Exo 5
À l’aide d’une boucle do… while + while, améliorez l’algorithme de la calculatrice afin qu’elle 
demande à l’utilisateur s’il veut faire un autre calcul (tant qu’il le désire).*/
let continueCalculation = true;

while (continueCalculation) {
    let numberUser1 = parseFloat(prompt("Calculator \n Please type a number: "));
    let operationUser = prompt("Please choose a operation from '+', '-', '/', '*': ");
    let numberUser2 = parseFloat(prompt("Please type another number: "));
    let operationResult;
    let validInput = false;

    do {
        switch (operationUser) {
            case "+":
                operationResult = numberUser1 + numberUser2;
                validInput = true;
                break;
            case "-":
                operationResult = numberUser1 - numberUser2;
                validInput = true;
                break;
            case "/":
                if (numberUser2 == 0) {
                    console.log("You can't divide by 0!");
                } else {
                    operationResult = numberUser1 / numberUser2;
                    validInput = true;
                }
                break;
            case "*":
                operationResult = numberUser1 * numberUser2;
                validInput = true;
                break;
            default:
                console.log("Operation Invalid!");
                operationUser = prompt("Please choose a operation from '+', '-', '/', '*': ");
        }
    } while (!validInput)

    console.log(operationResult);

    // Ask user if they want to continue with another calculation
    let userContinue = prompt("Would you like to perform another calculation? (yes/no): ");

    if (userContinue.toLowerCase() !== "yes") {
        continueCalculation = false;
    }
}

