'use strict';

const  selectAllBtn = document.getElementById('select-btn');
const inputElement = document.getElementById('input');
const ulElement = document.getElementById('tasks-list');

const todoList = [];//Данные
//newTask();

//добавляем обработчик событий для кнопки select all 
selectAllBtn.addEventListener('click', () => {console.log('Hello!');});
  

//добавляем обработчик событий для инпута
//keydown - нажатие любой клавиши на клавиатуре
//event - аргумент ф-ции
//условие, что должна делать ф-ции при нажатии клавиши энтер
//управление
inputElement.addEventListener('keydown', event => 
{
    if(event.key === 'Enter' || event.keyCode === 13){
        
        todoList.unshift({
            content: inputElement.value,
            done: false,
            selected: false
        });
        inputElement.value = '';
        newTask();
    
    }
    //console.log(event);
});

function newTask () {
    ulElement.innerHTML = '';
    for(let i = 0; i<todoList.length; i++){
        const todoItem = todoList[i];
//Создаем список
const liElement = document.createElement('li');
liElement.className = 'task-title';

//добавляеим элемент li в ul
ulElement.append(liElement);

const divElement = document.createElement('div');
divElement.className = 'task-cont';
liElement.append(divElement);

const checkboxElement = document.createElement('input');
checkboxElement.type = 'checkbox';
checkboxElement.className = 'checkbox';
checkboxElement.id = 'todoItem' + i;
checkboxElement.checked = todoItem.selected;
divElement.append(checkboxElement);

const labelElement = document.createElement('label');
labelElement.className = 'label';
if(todoItem.done){
    labelElement.className += ' todoDone';
};
labelElement.setAttribute('for', 'todoItem' + i );
labelElement.innerText = todoItem.content;
divElement.append(labelElement);

const btnDoneElement = document.createElement('button');
btnDoneElement.className = 'btn done-btn-2';
btnDoneElement.type = 'button';
btnDoneElement.innerText = 'Done';
divElement.append(btnDoneElement);

const btnRemoveElement = document.createElement('button');
btnRemoveElement.className = 'btn remove-btn-2';
btnRemoveElement.type = 'button';
btnRemoveElement.innerText = 'Remove';
divElement.append(btnRemoveElement);

btnDoneElement.addEventListener('click', () => {
  todoItem.done = !todoItem.done;
  newTask();
});
    };
};

document.getElementById('done-action').addEventListener('click', () => {
    console.log('hey done');
});

document.getElementById('restore-action').addEventListener('click', () => {
    console.log('hey restore')
});

document.getElementById('remove-action').addEventListener('click', () => {
    console.log('hey remove');
});

//<button type="button" class="btn done-btn" id="done-action">Done</button>
//<button type="button" class="btn restore-btn" id="restore-action">Restore</button>
//<button type="button" class="btn remove-btn" id="remove-action">Remove</button>

//MVC:
//Model - данные
//View - вид, отображение, представление (Html/CSS - разметка)
//Controller - управление, манипуляции 

