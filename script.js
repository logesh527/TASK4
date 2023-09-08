const todoText = document.getElementById("todo-text");
const todoUl = document.getElementById('ulist')

function addTasks() {
    if (todoText.value.trim() === "") {
        alert("Enter some values");
    }
    else {
        const liTag = document.createElement('li');
        const spanText = document.createElement('span');
        const textNode = document.createTextNode(todoText.value.trim());
        spanText.appendChild(textNode)
        spanText.addEventListener('click', (e)=>{
            const Done =e.target.classList.toggle('done');
        });
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML='X'
        spanClose.addEventListener('click', (e)=>{
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });
        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);
        todoUl.appendChild(liTag);
        todoText.value=' ';
    }

}
    }

}
