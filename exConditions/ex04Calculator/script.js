/*Réaliser l’algorithme d’une calculatrice basique. L’utilisateur est invité à saisir un nombre, un opérateur et un deuxième nombre. La calculatrice affiche ensuite le résultat. (Gérer la division par 0)*/


let numberUser1 = parseFloat(prompt("Calculator \n Please type a number: "))
let numberUser2 = parseFloat(prompt("Please type another number: "))
let operation = prompt("Please choose a operation from '+', '-', '/', '*': ")

/*
if (operation == "+"){
    console.log(numberUser1+numberUser2)
}   
else if (operation == "-"){
    console.log(numberUser1-numberUser2)
}
else if (operation == "/"){
    console.log(numberUser1/numberUser2).toFixed(2)
}
else if (operation == "*"){
    if (numberUser2==0){
        console.log("You can't divide with 0!")
    }
    else{
        console.log(numberUser1*numberUser2)
    }

}
else{
    console.log("Operation Invalid!")
}
*/


switch (operation){
    case "+": 
        console.log(numberUser1+numberUser2)
        break
    case "-":
        console.log(numberUser1-numberUser2)
        break
    case "/":
        console.log(numberUser1/numberUser2).toFixed(2)
        break
    case "*":
        if (numberUser2==0){
            console.log("You can't divide with 0!")
        }
        else{
            console.log(numberUser1*numberUser2)
        }
    default:
    console.log("Operation Invalid!")
}
