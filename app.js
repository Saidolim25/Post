// let url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url,{
    method: 'POST',
    headers:{
        'content-type':'application/json;charset=UTF-8'
    },
    body:JSON.stringify({
    title: 'hallo',
    body: 'wie gehts',
    userId:102
    })
})

.then((res)=> res.json())
.then((data) => console.log(data))

const input = document.getElementById('value');
const btn = document.getElementById('btn')
 let url = 'https://jsonplaceholder.typicode.com/posts'
let title;
function add(){
    
 fetch(url,{
     method: 'POST',
     headers:{
        'content-type':'application/json;charset=UTF-8'
     },
     body:JSON.stringify({
     title: 'hallo',
     body: 'wie gehts',
     userId:102
     })
 })
 
    .then((res) => res.json())
    .then((data) => console.log(data))
}




btn.addEventListener('click',function() {
    title = input.value
    add()
})