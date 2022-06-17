
// assign variables their interfaces for type check
var button = document.getElementById("submitButton")
var userName = document.getElementById("name") 
async function fetchType(name) {
    try {
        console.log(name)
        const response = await fetch(`https://api.agify.io?name=${name.toLowerCase()}`)
        const data = await response.json()
        printFact(data.age)
    } catch (e) {
        console.log("There was a problem fetching number.")
    }
}
button.onclick = function () {
    fetchType(userName.value)
}

function printFact(age) {
    var factEl = document.getElementById("fact");
    // check if this element is null
    if (factEl == null) throw new Error('Cannot find the fact element');
    // else we can safely assign value without type checking
    else document.getElementById("fact").innerHTML = "Your age - " + age;
    // assign interface
    var textField = document.getElementById("fact")
    textField.style.visibility = "visible"
}

 