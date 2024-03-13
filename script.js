const inputList = document.getElementById('input-list');
const btns = document.getElementById('btns');
const lists = document.getElementById('list')

function emptyInput(){
    inputList.value = ''
}


btns.addEventListener('click', function(){
    let createDiv = document.createElement('div');
    createDiv.classList.add('container', 'border', 'rounded', 'd-flex', 'justify-content-start', 'align-items-center');

    let createP = document.createElement('p');
    createP.textContent = inputList.value;
    createP.classList.add("text-dark", 'border', 'mt-3');

    createDiv.appendChild(createP);
    lists.appendChild(createDiv);
    emptyInput();
});
