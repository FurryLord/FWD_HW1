
// // assign variables their interfaces for type check
// var button = document.getElementById("submitButton") as HTMLButtonElement
// var userName = document.getElementById("name") as HTMLFormElement
// async function fetchType(name: string) {
//     try {
//         console.log(name)
//         const response = await fetch(`https://api.agify.io?name=${name.toLowerCase()}`)
//         const data = await response.json()
//         printFact(data.age)
//     } catch (e) {
//         console.log("There was a problem fetching name.")
//     }
// }
// button.onclick = function () {
//     if (userName.value)
//     fetchType(userName.value)
// }

// function printFact(age: string | null | undefined) {

//     var factEl = document.getElementById("fact");
//     // check if this element is not null
//     if (factEl === null) throw new Error('Cannot find the fact element');
//     // check if age is currect
//     if (age === null || age === undefined) {
//         document.getElementById("fact")!.innerHTML = "Incorrect data!"
//         textField!.style.visibility = "visible"
//         return
//     }
//     // else we can safely assign value without type checking
//     document.getElementById("fact")!.innerHTML = "Your age - " + age;
//     // assign interface
//     var textField = document.getElementById("fact") as HTMLElement
//     textField.style.visibility = "visible"
// }

