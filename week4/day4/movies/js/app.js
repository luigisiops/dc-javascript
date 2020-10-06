
let list = document.getElementById('moviesList')

let movie = movies.map((each)=>{
return `<h2>title: ${each.Title}</h2>
<img class = "poster"src= ${each.Poster}>
<p>year: ${each.Year}</p>`

})
list.insertAdjacentHTML('beforeend', movie.join(" "))



