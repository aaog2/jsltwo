// UI
const counters = document.querySelectorAll(".counter");
// console.log(counters);

counters.forEach((counter)=>{
    // console.log(counter);
    counter.innerText = "0";

    // console.log(counter.getAttribute("data-target"));

    const updatecounter = ()=>{
        const target = Number(counter.getAttribute("data-target"));
        // console.log(typeof target);

        const ctr = +counter.innerText; //number type chg
        // console.log(typeof tgr);

        const increment = target/100;
        // console.log(increment);

        if(ctr < target){
            counter.innerText = `${Math.ceil(ctr + increment)}`;
            setTimeout(updatecounter,50);
        }

    };

    updatecounter();
});

// 23AC WDFXXXX

