/* 
// assign variables their interfaces for type check
var button = document.getElementById("submitButton") as HTMLButtonElement
var type = document.getElementById("chooseType") as HTMLSelectElement

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

button.onclick = function () {
    fetchType(type.value)
}

function printFact(fact) {
    var factEl = document.getElementById("fact");
    // check if this element is null
    if (factEl == null) throw new Error('Cannot find the fact element');
    // else we can safely assign value without type checking
    else document.getElementById("fact")!.innerHTML = fact;
    // assign interface
    var textField = document.getElementById("fact") as HTMLElement
    textField.style.visibility = "visible"
}

 */