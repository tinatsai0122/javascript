/*Réalisez un algorithme utilisant le convertisseur de secondes, il reçoit deux durées en jours, heures, minutes et secondes et calcule la différence entre ces dernières puis l'affiche au format : jours, heures, minutes, secondes*/

let firstDate = new Date(2023, 2, 25, 2, 13, 33);
let secondDate = new Date(2023, 2, 25, 2, 14, 53);

let difference = secondDate.getTime() - firstDate.getTime();
let differenceInSeconds = difference / 1000; // Convert milliseconds to seconds

let days = Math.floor(differenceInSeconds / (24 * 60 * 60));
let hours = Math.floor((differenceInSeconds % (24 * 60 * 60)) / (60 * 60));
let minutes = Math.floor((differenceInSeconds % (60 * 60)) / 60);
let seconds = Math.floor(differenceInSeconds % 60);

console.log(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");



