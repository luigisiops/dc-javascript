let firstName = document.getElementById("firstNameInput")
let lastName = document.getElementById("lastNameInput")
let place = document.getElementById("return")


function fullNameReturn(){
    let first = firstName.value
    let last = lastName.value
    let concate = `${first}, ${last}`
    console.log(place)
    place.innerHTML = concate
}

