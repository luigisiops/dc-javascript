let input = document.getElementById("time")
let count = document.getElementById("counter")
let startButton = document.getElementById("button")



startButton.addEventListener("click", ()=>{
    let time = parseInt(input.value)
    let counter = time
    let intervalId = window.setInterval(() => {    
        console.log(counter)    
        counter--    
        if(counter == 0) {        
            window.clearInterval(intervalId)    
        }
    },1000)

})