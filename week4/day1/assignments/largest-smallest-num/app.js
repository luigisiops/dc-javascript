//largest num O(n)

let array = [5,1,43,21,87,7,607,2,-10]

let largestNum = (array) => {
    let current = array[0]
    let len = array.length -1
    for (i = 1; i<=len; i++){
        if (current < array[i]){
            current = array[i]
        }
    }
    return current
}

console.log(largestNum(array))

let smallestNum = (array) => {
    let current = array[0]
    let len = array.length -1
    for (i = 1; i<=len; i++){
        if (current > array[i]){
            current = array[i]
        }
    }
    return current
}

console.log(smallestNum(array))