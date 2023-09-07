const todoText = document.getElementById("todo-text");
const todoUl = document.getElementById('ulist')

function addTasks() {
    if (todoText.value.trim() === "") {
        alert("Enter some values");
    }
    else {
        console.log(todoText.value.trim());
        const liTag = document.createElement('li');
        const spanText = document.createElement('span');
        const textNode = document.createTextNode(todoText.value.trim());
        spanText.appendChild(textNode)
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML='x'
        spanClose.innerHTML='x'
        spanClose.addEventListener('click', (e)=>{
            console.log(e.target.parentElement);
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });
        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);
        todoUl.appendChild(liTag);
        todoText.value=' ';
    }

}