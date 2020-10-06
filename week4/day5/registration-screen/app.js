firstName = document.getElementById("firstName")
lastName = document.getElementById("lastName")
email = document.getElementById("email")
password = document.getElementById("password")
submit = document.getElementById("submit")
registerForm = document.getElementById("registerForm")

registerForm.addEventListener("submit", (event) =>{
    let toJson = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": email.value,
        "password": password.value
    }
    console.log(toJson)
    event.preventDefault()
})