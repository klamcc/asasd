var data = 'https://jsonplaceholder.typicode.com/users'
const dataElem = document.getElementById('data')

document.getElementById('search').addEventListener('input',e=>{
    var value = e.target.value
    console.log(value)
    dataChildren = dataElem.children
    dataList = [...dataChildren]
    console.log(dataList)
    dataList.forEach(item=>{
        if (!item.innerHTML.includes(value)){
            item.classList.toggle('hide')
            
        }
        else{
            item.classList.remove('hide')
            
        }
        console.log(item.innerHTML)
    })
})

fetch(data).then(function(response){
    return response.json()
}).then(function(data){
    var users = data.map(function(user){
        return `<div>
        <h1>${user.name}</h1>
        <p>${user.email}</p>
        </div>
        `
    })
    dataElem.innerHTML = users.join("")

        
    
})