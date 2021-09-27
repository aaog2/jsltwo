// UI
const imgcontainer = document.getElementById("imgcontainer");
const imgs = document.querySelectorAll("#imgcontainer img");
const leftbtn = document.getElementById("left"),
    rightbtn = document.getElementById("right");

let idx = 0;

leftbtn.addEventListener("click",()=>{
    idx--;
    changeimage();
    resetinterval();
    console.log(idx);
});

rightbtn.addEventListener("click",()=>{
    idx++;
    changeimage();
    resetinterval();
    console.log(idx);
});

function changeimage(){
    if(idx > imgs.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length
    }

    imgcontainer.style.transform = `translateX(${-idx * 500}px)`;
}

function imgrun(){
    idx++;
    changeimage();
}

let interval = setInterval(imgrun,3000);

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
}

imgcontainer.addEventListener("mouseenter",()=>{
    clearInterval(interval);
});

imgcontainer.addEventListener("mouseleave",()=>{
    interval = setInterval(imgrun,2000);
})