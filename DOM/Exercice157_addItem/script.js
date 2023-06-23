

function addItem(){
    //get user input value
    let userInput = document.getElementById("userInput").value
    
    //create element
    let newLi = document.createElement("li")
    newLi.innerHTML=userInput

    //verifier que mon input n'est pas vide avant l'ajout
    if(userInput.length > 1){
        //ajout a la list
        myList.appendChild(newLi)
        document.getElementById("userInput").value = ""
    }
    
    // //clear input value
    // document.getElementById("nItem").value=""

    
    //recupere list
    // let myList = document.getElementById("myList")
    // myList.insertAdjacentHTML("beforeend","<li>item</li>") 
}


