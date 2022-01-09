let todoInput // <-- miejsce na treść todo
let errorInfo // <-- paragraf z info o braku zadań/tekstu
let addBtn // <-- przycisk Add - dodanie elementu
let ulList // <-- list zadań
let newTodo // <--- nowe zadanie
// let newToolslArea // <-- nowe pole z narzędziami
// let newCompleteButton // <--  nowy przycisk zrobione
// let newEditButton // <--  nowy przycisk edycji
// let newDeleteButton // <--  nowy przycisk kasowania

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
    addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()
        
        ulList.append(newTodo);

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania.'
    }
}

const createToolsArea = () => {
    const newToolsArea = document.createElement('div')
    newToolsArea.classList.add('tools')
    newTodo.append(newToolsArea)

    const newCompleteButton = document.createElement('button')
    newCompleteButton.classList.add('complete')
    newCompleteButton.innerHTML = '<i class="fas fa-check"></i>'

    const newEditButton = document.createElement('button')
    newEditButton.classList.add('edit')
    newEditButton.textContent = 'EDIT'

    const newDeleteButton = document.createElement('button')
    newDeleteButton.classList.add('delete')
    newDeleteButton.innerHTML = '<i class="fas fa-times"></i>'

    newToolsArea.append(newCompleteButton, newEditButton, newDeleteButton)
}

document.addEventListener('DOMContentLoaded', main)