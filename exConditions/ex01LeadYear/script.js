/*exo 1 - Année bissextile
Réalisez un petit algorithme qui sur base d’une année donnée va déterminer 
s’il s’agit d’une année bissextile. Une année est bissextile si elle est divisible par 
4, mais non divisible par 100. Ou si elle est divisible par 400*/


let yearUser = parseInt(prompt("Please type a year: "))


if ((yearUser%400==0) || (yearUser%4==0 && yearUser%100!==0)) {
    alert("Year "+ yearUser +" is a lead year!")
} 
else {
    alert("Year "+yearUser +" is NOT a lead year!")   
}
