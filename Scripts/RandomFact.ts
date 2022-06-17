
// assign variables their interfaces for type check
var button = document.getElementById("submitButton") as HTMLButtonElement
var userName = document.getElementById("name") as HTMLFormElement

async function fetchType(name) {
    try {
        console.log(name)
        const response = await fetch(`https://api.agify.io?name=${name.toLowerCase()}`)
        const data = await response.json()
        console.log(data)
        //printFact(data)
    } catch (e) {
        console.log("There was a problem fetching number.")
    }
}

button.onclick = function () {
    fetchType(userName.value)
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

 