let message
let input


function test(){
    message = document.getElementById("message")
    input = document.getElementById("demo").value
    try{
        //Executer le code
        if (input == ""){
            throw "Empty Value!"
        }
        if (isNaN(input)){
            throw "Not a number!"
        }
        if (input <= 0){
            throw "The value should be positive."
        }
        if (input >100){
            throw "The value should be less than 100 or equal!"
        }

    }
    catch(error){
        console.log(error)
    }
}