let agent = navigator.userAgent
let splited = agent.split("(");
let device = splited[1].charAt(0);
const test = document.querySelector(".main_container");
if(device == 'L'){
    test.classList.add("android");
}
if(device == 'i'){
    test.classList.add("ios");
    document.body.style.maxHeight = "-webkit-fill-available"
}