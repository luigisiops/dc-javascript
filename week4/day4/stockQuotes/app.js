let stock = document.getElementById("stockVal")
let searchButton = document.getElementById("searchButton")
let display = document.getElementById("display")

searchButton.addEventListener("click", ()=>{
    window.setInterval(()=>{
        let stockVal = stock.value
        let returnedVal = getStockQuote(stockVal)
        display.innerHTML=`name: ${returnedVal.name}
        price: $${returnedVal.price}`
    },2000)
})