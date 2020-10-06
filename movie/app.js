const searchBar = document.getElementById('search bar')
const searchButton = document.getElementById('search button')
const doc = document.getElementById('container')
const movieContainer = document.getElementById('movie-container')

const sendHttpRequest = (method, url) =>{
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.onload = () => {
            try{
            resolve(xhr.response)}
            catch{
                reject('Request rejected')
            }
        }
        xhr.send()
    })
    return promise
}

const getData = () =>{
    let movieTitle = searchBar.value
    let data = sendHttpRequest('GET', `http://www.omdbapi.com/?s=${movieTitle}&apikey=f5fd409c`)
    console.log(data)
    return data
    }

const createTemplate = async() => {
    let data = await getData()
    console.log(data)
    let dataArray = data.Search
    let info = dataArray.map((element)=> {
    return `<div class = "titles">${element.Title} (${element.Year})</div>
            <img class = "images" src=${element.Poster}>`
})
/*
const createTemplate = async() => {
    let data = await getData()
    let dataArray = data.Search
    let info = dataArray.map((element)=> {
        return `<div>${element.Title}</div>`
})*/
    movieContainer.innerHTML = info.join(' ')
}



    

    


searchButton.addEventListener('click', createTemplate)
