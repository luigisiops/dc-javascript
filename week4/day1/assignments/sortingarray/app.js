let array = [1,4,7,433,2,324,34,2,0]
let selectionSort = (array) => {
    let len = array.length

    for (let i = 0; i < len; i++){
        let min = i;
        for(let j = 0; j < name; j++){
            if(array[j]<array[min]) {
                min = j
            }
        }
        if (min != i){
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}

console.log(selectionSort(array))