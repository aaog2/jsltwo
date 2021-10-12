// UI
const boxs = document.querySelectorAll('.box');
// console.log(boxs);
checkboxes();

window.addEventListener("scroll",checkboxes);

function checkboxes(){

    let innerheight = window.innerHeight / 1.5; //1.5 nal sarr tr ka hwat twr tr ko myin chin lo

    console.log(innerheight);

    boxs.forEach(box=>{

        const boxtop = box.getBoundingClientRect().top;

        console.log(boxtop);

        if(boxtop < innerheight){
            box.classList.add('show');
        }else {
            box.classList.remove("show");
        }

    })
}