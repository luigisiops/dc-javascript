let feedDog = document.getElementById("feedDog")
let current = document.getElementById("current")
let finished = document.getElementById("list")
let newTask = document.getElementById("newTask")
let submit = document.getElementById("taskButton")

//need a input button that will create a task 
// which will create a checkbox 
/*
        <label class="panel-block">
            <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <input type="checkbox">
            Wash the car
            <button id = "remove" class = "button">Remove</button>
        </label>*/

//a lot of the logic needs to be built upon creation of the task
submit.addEventListener("click", () => {
    let task = newTask.value
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener("click", function() {
        finished.appendChild(this.parentElement)
    })

    let label = document.createElement("label")
    label.setAttribute("class", "panel-block")

    let span = document.createElement("span")
    span.setAttribute("class", "panel-icon")

    let i = document.createElement("i")
    i.setAttribute("class","fas fa-book")
    i.setAttribute("aria-hidden", "true")

    let remove = document.createElement("button")
    remove.setAttribute("id", "remove")
    remove.setAttribute("class", "button")
    remove.addEventListener("click", function(){
        let parent = this.parentElement.parentElement
        parent.remove(this.parentElement)
    })
    ///
    let container = document.createElement("span")
    container.setAttribute("class","container")

    label.innerHTML = task
    label.appendChild(span)
    span.appendChild(i)
    remove.innerHTML = "remove"
    label.appendChild(remove)
    console.log(label)

    container.appendChild(checkbox)
    container.appendChild(label)

 

    current.appendChild(container)

    newTask.value=""
    
})

feedDog.addEventListener("click", (() => {
    finished.appendChild(feedDog)
}))