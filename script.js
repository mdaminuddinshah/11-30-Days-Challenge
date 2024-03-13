const inputList = document.getElementById('input-list');
const btns = document.getElementById('btns');
const lists = document.getElementById('list')



btns.addEventListener('click', function(){
    let createDiv = document.createElement('div');
    createDiv.classList.add('container', 'border', 'rounded')

    let createP = document.createElement('p')
    createP.textContent = inputList.value
    createP.classList.add("text-dark")

    createDiv.appendChild(createP)
    lists.appendChild(createDiv)
})