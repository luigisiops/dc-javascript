let list = document.getElementById('list')


let iterate = (item) =>{
    let thing = `
    <li>
        <b>${item.title}</b>
        <p>${item.body}</p>
    </li>`
    list.insertAdjacentHTML('beforeend',thing)

}

let postItems = posts.map(function(item){
    return`
    <li>
        <b>${item.title}</b>
        <p>${item.body}</p>
    </li>`
})

list.insertAdjacentHTML('beforeend',postItems.join(" "))

/*
for (let index = 0; index < posts.length; index++){
    let currentPost = posts[index]

    let item = 
    `<li>
        <b>${currentPost.title}</b> 
        <p>${currentPost.body}</p>
    </li>`

    list.insertAdjacentHTML('beforeend',item)
}
*/

console.log(posts)