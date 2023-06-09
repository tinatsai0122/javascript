/*exo 5 - Note
Ecrire un algorithme qui met l'appréciation par rapport à des notes. Ces notes sont comprises entre 0 et 20. 0-10 : I, 11-12 : S, 13-15 : B, 16-18 : TB, 19-20 : Excellent/!\ Gérer les erreurs : ex : -2; 2
*/

let gradeUser = parseInt(prompt("Please enter your grade: "))

if (gradeUser >= 0 && gradeUser<=10) {
    console.log("Your grade: " + gradeUser + " is I")
    }
else if (gradeUser >=11 && gradeUser<=12) {
            console.log("Your grade: " + gradeUser + " is S")
        }     
else if (gradeUser >=13 && gradeUser<=15) {
            console.log("Your grade: " + gradeUser + " is B")
        } 
else if (gradeUser >=16 && gradeUser<=18) {
            console.log("Your grade: " + gradeUser + " is TB")
        } 
else if (gradeUser ==19 || gradeUser==20) {
            console.log("Your grade: " + gradeUser + " is Excellent")
        } 
else {
        console.log("Please enter number between 0-20!")
}





