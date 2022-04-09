let button = document.getElementById('btn');
let information = document.getElementById('information');


button.addEventListener('click',() => {
    if(information.innerHTML == `Click the button below for further instructions`){
    information.innerHTML = `Add a players name who you think should be on the 
    best basketball player list.`
    }
    else{
        information.innerHTML = `Click the button below for further instructions`
    }
});

let id = 0;

document.getElementById('add').addEventListener('click', () => {
let table = document.getElementById('list')
let row = table.insertRow(1);
row.setAttribute(`id`, `item-${id}`);
row.insertCell(0).innerHTML = '';
row.insertCell(1).innerHTML = document.getElementById('new-text').value;
row.insertCell(2).innerHTML = '';
row.insertCell(3).innerHTML= '';

let actions = row.insertCell(4);
actions.appendChild('');
document.getElementById('new-text').value = ''; 
})
