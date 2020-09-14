'use strict';

const  selectAllBtn = document.getElementById('select-btn');
const inputElement = document.getElementById('input');
const ulElement = document.getElementById('tasks-list');

const todoList = [];//Данные


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
        
        todoList.push(inputElement.value);
        inputElement.value = '';
        console.log(todoList);
    
    }
    //console.log(event);
});

//Создаем список
const liElement = document.createElement('li');
liElement.className = 'task-title';

//добавляеим элемент li в ul
ulElement.append(liElement);

const divElement = document.createElement('div');
divElement.className = 'task-cont';
liElement.append(divElement);

const inputElement = document.createElement('input');
inputElement.type = 'checkbox';
inputElement.className = 'checkbox';
divElement.append(inputElement);

const labelElement = document.createElement('label');
labelElement.className = 'label';
divElement.append(labelElement);

const btnDoneElement = document.createElement('button');
btnDoneElement.className = 'btn done-btn-2';
divElement.append(btnDoneElement);

const btnRemoveElement = document.createElement('button');
btnRemoveElement.className = 'btn remove-btn-2';
divElement.append(btnRemoveElement);



//<li class="task-title" id="task-title">
//	<div class="task-cont">
//	<input class = "checkbox" type="checkbox" id="check" name="checkbox">
//	<label class = "label" for = "check">Task1</label>
//	<button type="button" class="btn done-btn-2" id="done-btn-2">Done</button>
//	<button type="button" class="btn remove-btn-2" id="remove-btn-2">Remove</button>
//	</div>
//</li>

//MVC:
//Model - данные
//View - вид, отображение, представление (Html/CSS - разметка)
//Controller - управление, манипуляции 

