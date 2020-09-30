//method includes

let array = [1,2,3,4,5,6,7]

let inArray = (array, num) => {
    if (array.includes(num)){
        return true
    }
    else{
        return false
    }
}

console.log(inArray(array,2))


/////////////////////
//for loop method


let arrayLoop = (array, num) => {
    for (let i = 0; i<array.length; i++){
        if (array[i] == num){
            return true
        }
    }
    return false
}

console.log(arrayLoop(array,30))