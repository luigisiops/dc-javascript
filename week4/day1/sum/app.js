


let sum = () => {
    let first = parseInt(document.getElementById('first').value)
    let second = parseInt(document.getElementById('second').value)

    let sum = first + second
    console.log(sum)

    if (sum >= 50 && sum <= 80) {
        return 65
    }
    else {
        return 80
    }
}
console.log(sum)



