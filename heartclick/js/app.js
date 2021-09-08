// UI
const times = document.getElementById('times');
const loveme = document.querySelector('.loveme');

let timeclicked = 0;

// db click
let clicktimes = 0;

loveme.addEventListener('click',(e)=>{
    // console.log('hey');
    if(clicktimes === 0){
        clicktimes = new Date().getTime();
    }else {
        if(new Date().getTime() - clicktimes < 1000){
            // console.log("i am dblclick");
            createheart(e);
            clicktimes = 0;
        }else {
            clicktimes = new Date().getTime();
            // clicktimes = 0;
        }
    }
});

const createheart = (e)=>{

    const heart = document.createElement("i");
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // console.log(heart);

    let cx = e.clientX;
    let cy = e.clientY;

    const offsettop = e.target.offsetTop;
    const offsetleft = e.target.offsetLeft;

    const xinside = cx-offsetleft;
    const yinside = cy-offsettop;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);

    times.innerText = ++timeclicked;

    setTimeout(()=>heart.remove(),1000);
};



