const bill = 430;

/* Write your code below. Good luck! 🙂 */

let tip = bill <= 300 && bill >=50 ? bill*0.15 : bill*0.20
let finalBill = bill + tip

console.log(`The final bill will be ${bill+tip}, the tip will be ${tip} while the amount of the bill is ${bill} `)