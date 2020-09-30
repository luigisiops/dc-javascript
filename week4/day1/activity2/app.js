let vowels = ['a','e','i','o','u']



let isVowel = () => {
    let letter = document.getElementById('value').value
    if (vowels.includes(letter)){
        console.log('vowel')
    }
    else{
        console.log('false')
    }
}


