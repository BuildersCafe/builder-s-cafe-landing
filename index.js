let agent = navigator.userAgent
let splited = agent.split("(");
let device = splited[1].charAt(0);
const test = document.querySelector(".main_container");
const toast = document.querySelector(".ani_container");
let timer1, timer2;

let ani_start  =() => {
    toast.classList.add("active");
        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
        }, 5300);
}


if(device == 'i'){
    test.classList.add("ios");
    document.body.style.maxHeight = "-webkit-fill-available"
}