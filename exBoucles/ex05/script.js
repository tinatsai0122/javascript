/*Exo 5
À l’aide d’une boucle do… while + while, améliorez l’algorithme de la calculatrice afin qu’elle 
demande à l’utilisateur s’il veut faire un autre calcul (tant qu’il le désire).*/


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
