let result = 1
let counter = 0

let valueUser = parseInt(prompt("Enter a number: "))
let exposant = parseInt(prompt("Enter how many squre roots: "))

for (let i=0; i< exposant; i++){
    result = result * valueUser;
}

console.log(`${valueUser} exposant 10 = ${result}`)
