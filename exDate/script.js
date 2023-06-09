/* Utilisez l’objet Date et des structures conditionnelles,
écrivez un programme qui affiche le jour de la semaine.
Exemple : « Bonjour, nous sommes lundi! »*/

// Donne le jour de la semain(0-6) (dimanche a samedi)
let date = new Date()

let day = date.getDay()

switch (day){
    case 0:
        alert("Bonjour, nous sommes dimance!")
        break;
    case 1:
        alert("Bonjour, nous sommes lundi!")
    break;       
    case 2:
        alert("Bonjour, nous sommes mardi!")
        break;    
    case 3:
        alert("Bonjour, nous sommes mercredi!")
        break;    
    case 4:
        alert("Bonjour, nous sommes jeudi!")
        break;    
    case 5:
        alert("Bonjour, nous sommes vendredi!")
        break;    
    case 6:
        alert("Bonjour, nous sommes samedi!")
        break;    
    default:
        alert("Error")
        break;
}

