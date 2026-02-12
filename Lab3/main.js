newtask = document.querySelector('#newtask');
add = document.querySelector('#add_button');
list = document.querySelector("#list");
task = document.querySelectorAll('.Task');

function addNewTask() {
    let t = newtask.value;
    newtask.value = '';

    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.append(" "+t);
    list.appendChild(li);
    checkbox.addEventListener('change', ()=>{
        if(checkbox.checked){
            setTimeout(() => {li.remove();}, 500);
        }
    });
}

add.addEventListener('click',addNewTask);
task.addEventListener('click',);
