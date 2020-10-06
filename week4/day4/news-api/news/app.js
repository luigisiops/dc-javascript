const container = document.getElementById("container")
const newsInfo = document.getElementById("newsInfo")


let filterArticles = (element)=>{
    let data = news.articles.filter(item => item.source.id == element)
    console.log(data)
}

const sourceData = sources.sources
let mediaSources = sourceData.map((item) => {
    return `<button onclick = "${filterArticles(item.id)}">${item.id}</button>`
})

newsInfo.insertAdjacentHTML('beforeend', mediaSources.join(" "))



/*
let newsFeed = news.articles.map((item) => {
    return `<h3>${item.title}</h3>
    <p>Author: ${item.author}</p>
    <p>Description: ${item.description}</p>
    <a href = ${item.url}></a>
    <img src=${item.urlToImage}>
    <p>Publisher: ${item.publishedAt}</p>`

})
newsInfo.insertAdjacentHTML('beforeend', newsFeed.join(" "))
*/
