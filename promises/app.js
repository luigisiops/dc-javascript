const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

//xmlHttpRequests need a method and a url
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        //instantiates the xml object
        const xhr = new XMLHttpRequest();
        //prepares the actual request to be sent
        xhr.open(method, url)

        xhr.responseType = 'json'

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json')
        }
        
        //logic for handling response and converting
        //marks promise as resolved and passes data to resolve to be used 
        //with the then method
        xhr.onload = () =>{
            resolve(xhr.response)
        }
        //sends the request
        xhr.send(JSON.stringify(data))
    })
    return promise
}
/* example of promise using .thn
const getData = () => {
    //then method used to do something specified in a function with the resolved promise
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData =>{
        console.log(responseData)
    })
}
*/

const getData = async() => {
    //then method used to do something specified in a function with the resolved promise
    
    const data = await(sendHttpRequest('GET', 'https://reqres.in/api/users'))
    console.log(data)
}


const sendData = async() => {
    const data = await(sendHttpRequest('POST', 'https://reqres.in/api/register',{
        email: "eve.holt@reqres.in",
        password:"pistol"
    }))
    console.log(data)
}


getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', sendData)