
//#regionSwitch

let stockCoka = 2
let stockFanta = 1
let stockCoffee = 0


let drinkUser = parseInt(prompt("Please type the number: \n -(1) Coca-cola \n -(2) Fanta \n -(3) Coffee  "))

switch (drinkUser){
    case 1:
        if (stockCoka > 0){
            console.log("Here you are the Coke!")
            stockCoka--
        }
        else{
            console.log("The Coke is out of Stock!")
        }
        break
    case 2:
        if (stockFanta > 0){
        console.log("Here you are the Fanta!")
        stockFanta--
        }
        else{
        console.log("The Fanta is out of Stock!")
        }
        break
    case 3:
        if (stockCoffee > 0){
        console.log("Here you are the Coffee!")
        stockCoffee--
        }
        else{
        console.log("The Coffee is out of Stock!")
        }
        break
    default:
        console.log("The value: ", drinkUser, "is not known.")
        break
 }
//#endregion

/*
//#regionIf
let drinkUserIf = parseInt(prompt("Please type the number: \n -(1) Coca-cola \n -(2) Fanta \n -(3) Coffee  "))

if (drinkUserIf == 1){
   if (stockCoka > 0){
    console.log("Here you are the Coke!")
    stockCoka--
   }
   else{
    console.log("The Coke is out of Stock!")
   }
}
else if (drinkUserIf == 2){
    if (stockFanta > 0){
     console.log("Here you are the Fanta!")
     stockFanta--
    }
    else{
     console.log("The Fanta is out of Stock!")
    }
 }
else if (drinkUserIf == 3){
    if (stockCoffee > 0){
     console.log("Here you are the Coffee!")
     stockCoffee--
    }
    else{
     console.log("The Coffee is out of Stock!")
    }
 }
 else{
    console.log("The value: ", drinkUserIf, "is not known.")
 }
*/







