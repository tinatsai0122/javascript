/*Reprenez l’algorithme du lanceur de balles de tennis et faites en sorte qu’il lance une balle 
tant que le stock n’est pas vide. Il y a donc 2 variables : stockBalles et prê*/

let ready
let stockBalls = 5;

while (stockBalls > 0) {
    ready = prompt("Are you ready, so we could launch the ball? Yes/No").toLowerCase();

    if (ready === "yes") {
        console.log("The ball is launched!");
        stockBalls--; 
    } else if (ready === "no") {
        console.log("The player is not ready!");
        continue;
    } else {
        console.log("Please answer with Yes or No");
    }
}

if (stockBalls <= 0) {
    console.log("Tennis ball is out of Stock! The game is finished");
}


/*
while ( stockBalles>0 && ready == true ){
    console.log("The ball is launched!")
    stockBalles --;
    if (stockBalles <=0){
    console.log("tennis ball not available!")
    }
}
*/

