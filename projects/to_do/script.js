let todoInput // <-- miejsce na treść todo
let errorInfo // <-- paragraf z info o braku zadań/tekstu
let addBtn // <-- przycisk Add - dodanie elementu
let ulList // <-- list zadań
let newTodo // <--- nowe zadanie
// let newToolslArea // <-- nowe pole z narzędziami
// let newCompleteButton // <--  nowy przycisk zrobione
// let newEditButton // <--  nowy przycisk edycji
// let newDeleteButton // <--  nowy przycisk kasowania
let popup // popup
let popupInfo // tekst w popupie, jak się doda pusty tekst
let todoToEdit // edytowany todo
let popupInput // input w popupie
let popupAddBtn// przycisk zatwierdź w popupie
let popupCloseBtn // przycisk anuluj w popupie


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoList ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')

}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
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

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')

    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if(popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść.'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li')

    if(allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

const enterKeyCheck = e => {
    if (e.key === 'Enter') {
        addNewTodo()
    }
}

document.addEventListener('DOMContentLoaded', main)