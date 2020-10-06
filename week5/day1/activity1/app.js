const container = document.getElementById('container')
const xhr = new XMLHttpRequest()

xhr.addEventListener('load', function() {
    const sendHttpRequest = (method, url) => {
        const promise = new Promise((resolve, reject) => {
        const data = xhr.response
        let parsed = JSON.parse(data)
        resolve(parsed) 
    })
    return promise
}
const getData = async() => {
    let catData = await (sendHttpRequest('GET','https://cat-fact.herokuapp.com/facts'))
    console.log(catData)
    catData.all.forEach(element => {
        container.insertAdjacentHTML('beforeend',`<p>${element.text}</p>` )
    })
}
getData()
})

xhr.open('GET', 'https://cat-fact.herokuapp.com/facts')
xhr.send()









