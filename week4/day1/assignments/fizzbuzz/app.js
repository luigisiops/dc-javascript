//check div 3
//check div 5
//check both


let num = 33

let fizzbuzz = (num) => {
    if (num%3 == 0 && num%5 ==0){
        console.log('fizzbuzz')
    }
    else if (num%3==0){
        console.log('fizz')
    }
    else if (num%5==0){
        console.log(num%5)
    }
    else{
        console.log('not fizz or buzz')
    }
}

fizzbuzz(num)