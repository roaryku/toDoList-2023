const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

inputField.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        btn.click();
    }
})

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item)
    inputField.value = ' ';

    item.addEventListener('click', () => {
        item.classList.add('toDoComplited');
    })

    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item)
    })
})


