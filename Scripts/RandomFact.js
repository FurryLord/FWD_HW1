var button = document.getElementById("submitButton")
var type = document.getElementById("chooseType")

async function fetchType(typeToSelect) {
    try {
        console.log(typeToSelect)
        const response = await fetch(`http://numbersapi.com/random/${typeToSelect.toLowerCase()}`)
        const data = await response.text()
        printFact(data)
    } catch (e) {
        console.log("There was a problem fetching number.")
    }
}  

button.onclick = function(){
    fetchType(type.value)
}

function printFact(fact){
    document.getElementById("fact").innerHTML = fact
    var textField = document.getElementById("fact")
    textField.style.visibility = "visible"
}

