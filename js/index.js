console.log('hello world')
const todo = document.getElementById('input-box')
const list = document.getElementById('todolist')

function AddTodo(){
    if(todo.value ===''){
        alert('write some code in todo')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = todo.value
        list.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    todo.value= ''
    saveData()
    
}

list.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem('data',list.innerHTML)
}
function showData(){
    list.innerHTML=localStorage.getItem('data')
}
showData()