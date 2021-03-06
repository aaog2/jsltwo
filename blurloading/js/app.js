const loadtext = document.querySelector(".loadingtext");
const bg = document.querySelector(".bg");

let load = 0;

let blurinterval = setInterval(blur,30);

function blur(){

    load++;

    if(load > 99){
        clearInterval(blurinterval);
    }

    loadtext.innerText = `${load}%`;
    loadtext.style.opacity = scale(load,0,100,1,0);
    // let blurtext = scale(load,0,100,70,0);
    bg.style.filter = `blur(${scale(load,0,100,70,0)}px)`;

}

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num-inmin) * (outmax-outmin)/(inmax-inmin) + outmin;
}

