
//#region splice
let tab = [4,5,6,7,8,9];

tab.splice(3,7,0,1);
console.log(tab) //Permet d'ajouter les element 1,2,... a partir de l'emplacement a, en supprimant b elements.
console.log(tab.valueOf())

tab.splice(2,1,7,7,7);
console.log(tab.valueOf())

//#endregion

//#region slice
let tab2 = [1,2,3,4,5,6];
console.log("Affichage de mon tab slice")
console.log(tab.slice(1,4))

//#endregion

//#region concat

let tabTempo = [1]
let tabTempo2=[2]
let tabFinal = tabTempo.concat(tabTempo2)

console.log(tabFinal)
console.log(tabTempo.concat(tabTempo2))
//#endregion

//#region sort
let tabNumber = [5,7,2,9,3,4]
let tabString = ["Pizza","Burger","Nouille"]

tabString.sort()
console.log(tabString)

console.log(tabNumber.sort(function(a,b){return a-b}))

console.log(tabNumber.sort(function(a,b){return b-a}))

//#endregion


