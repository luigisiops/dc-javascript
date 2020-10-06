//Menu Sections
let starters = document.getElementById('starters')
let entrees = document.getElementById('entrees')
let desserts = document.getElementById('desserts')

//Menu Filters
starterItems = dishes.filter(item => item.course == "Starters")
entreeItems = dishes.filter(item => item.course == "Entrees")
dessertItems = dishes.filter(item => item.course == "Desserts")

//Tab Buttons
let fullMenuTab = document.getElementById("fullMenuTab")
let startersTab = document.getElementById("startersTab")
let entreesTab = document.getElementById("entreesTab")
let dessertsTab = document.getElementById("dessertsTab")

startersTab.addEventListener("click", function() {
    entrees.style.display = "none"
    desserts.style.display = "none"
    starters.style.display ="block"
})
entreesTab.addEventListener("click", function() {
    starters.style.display = "none"
    desserts.style.display = "none"
    entrees.style.display = "block"
})
dessertsTab.addEventListener("click", function() {
    entrees.style.display = "none"
    starters.style.display = "none"
    desserts.style.display = "block"
})
fullMenuTab.addEventListener("click", function() {
    entrees.style.display = "block"
    starters.style.display = "block"
    desserts.style.display = "block"

})


let starterMap = starterItems.map(function(item){
   return (`
    <li class = "items">
        <h4 class= "titles">${item.title}</h4>
        <img class="images" src=${item.imageURL}>
        <p class = "description">Description: ${item.description}</p>
        <p class ="price">Price: $${item.price}</p>
    </li> `
    )})

let entreeMap = entreeItems.map(function(item){
    return(`
        <li class = "items">
            <h4 class= "titles">${item.title}</h4>
            <img class="images" src=${item.imageURL}>
            <p class = "description">Description: ${item.description}</p>
            <p class ="price">Price: $${item.price}</p>
        </li> `
        )})

let dessertMap = dessertItems.map(function(item){
    return(`
        <li class = "items">
            <h4 class= "titles">${item.title}</h4>
            <img class="images" src=${item.imageURL}>
            <p class = "description">Description: ${item.description}</p>
            <p class ="price">Price: $${item.price}</p>
        </li> `
        )})


starters.insertAdjacentHTML("beforeend", starterMap.join(" "))
entrees.insertAdjacentHTML("beforeend", entreeMap.join(" "))
desserts.insertAdjacentHTML("beforeend", dessertMap.join(" "))

