let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let submit = document.getElementById("submitButton")
let fullName = document.getElementById("fullName")

submit.addEventListener("click", function(){
    let first = firstName.value
    let last = lastName.value
    fullName.innerHTML = last + ", " + first
    console.log(fullName)
})
