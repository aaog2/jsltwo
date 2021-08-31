// UI
const search = document.querySelector(".search"),
    inputel = document.querySelector('.input'),
    btnel = document.querySelector('.btn');

btnel.addEventListener('click',()=>{
    search.classList.toggle('active');

    // for ready cursor
    inputel.focus();
})