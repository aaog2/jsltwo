// UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam explicabo hic impedit incidunt iusto nam placeat quod sequi sint voluptatem! Asperiores eveniet iste laborum magnam neque quis repudiandae, ullam veniam.';
// console.log(pgh.length);

let idx = 1;
let speed = 1000;

function autotext(){
    // console.log("hey");
    textel.innerText = pgh.slice(0,idx);

    idx++;

    if(idx > pgh.length){
        idx = 1;
    }

    setTimeout(autotext,speed);
}

autotext();

// Event Listener
speedel.addEventListener('input',()=>{
    // console.log(speedel.value);

    speed = 100 /  speedel.value;
});
