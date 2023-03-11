let registerButton = document.querySelector('#registerNow')
let modalWindow = document.querySelector('#modalWindow')
let modal = document.querySelector('#modal')
let blackOverlay = document.querySelector('#modalWindow:not(#modal)')
let modalClose = document.querySelector('#modalClose')
registerButton.addEventListener('click', showhideModal);

function showhideModal(){
    modalWindow.classList.toggle('hidden');
}

modalClose.addEventListener('click', showhideModal);