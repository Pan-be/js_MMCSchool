let todoInput // <-- miejsce na treść todo
let errorInfo // <-- paragraf z info o braku zadań/tekstu
let addBtn // <-- przycisk Add - dodanie elementu
let ulList // <-- list zadań

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoList ul')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
    if (todoInput.value !== '') {
        console.log('ok');
    } else {
        errorInfo.textContent = 'Wpisz treść zadania.'
    }
}

document.addEventListener('DOMContentLoaded', main)