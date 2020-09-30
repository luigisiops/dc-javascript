let array = ["John", "Mary", "Alex", "Steve", "Mary", "John"];

let removeDuplicates = (array) => {
    let count = {}
    let removed = []

    array.forEach((name, index) => {
        if (count[name]) {
            count[name]++
        }
        else {
            count[name] = 1
        }
    })

    for (const name in count) {
        removed.push(name)
    }
    console.log(count)
    return removed
}

console.log(removeDuplicates(array))

