let todoInput // <-- miejsce na treść todo
let errorInfo // <-- paragraf z info o braku zadań/tekstu
let addBtn // <-- przycisk Add - dodanie elementu
let ulList // <-- list zadań

const main = () => {
    
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoList ul')

    document.addEventListener('DOMContentLoaded', main)
}