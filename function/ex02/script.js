//2. Créez une méthode pour inverser l'ordre des éléments dans un tableau.

// let friends = ["Tina", "John","Mary"]

// let reverseNameList = (array) => array.reverse();
// console.log(reverseNameList(friends))



function inverse(tableau) {
  let newTableau = new Array(tableau.length);
  let j = 0;

  for (let i = tableau.length - 1; i >= 0; i--) {
    console.log("***************Tour nr ", (j+1) , " *****************")
    console.log("Je copie l'element a la valeur d'index " + i + " pour la valeur " +tableau[i])
    console.log("Pour la recupere dans mon nouveau tableau a la valeur d'index " + j)
    newTableau[j] = tableau[i];
    j++;
  }

  return newTableau;
}

//Appel
let monTab = [1, 2, 3, 4, 5];
let monTabReverse = inverse(monTab)


