let agent = navigator.userAgent
let splited = agent.split("(");
let device = splited[1].charAt(0);
const test = document.querySelector(".main_container");
const toast = document.querySelector(".ani_container");
const neon_color = document.querySelector(".neon");
const description = document.querySelector(".ani_text");
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let timer1, timer2;
let display = 0;

trigger();

async function trigger(){
    display = 0;
    await wait(500);
    ani_looper();
}

async function ani_looper() {
    for(let counter = 0 ; counter <= 5 ; counter++){
        switch(display){
            case 0:
                neon_color.style.backgroundColor = "#00ffff";
                description.innerHTML = "💬 မိမိနဲ့ဝါသနာတူများနဲ့​တွေ့ဆုံပြီးရင်းနှီးစွာစကား​ပြောကြမယ်။";
                break;
            case 1:
                neon_color.style.backgroundColor = "#FF6700";
                description.innerHTML = "🔨 မိမိတို့ဖန်တီးထား​သော projects များအားပြသနိုင်​စေရန်။";
                break;
            case 2:
                neon_color.style.backgroundColor = "#E0E722";
                description.innerHTML = "🤝 မိမိတို့ဖန်တီး​နေ​သော project အတွက် co-founder ရှာနိုင်ရန်။";
                break;
            case 3:
                neon_color.style.backgroundColor = "#808080";
                description.innerHTML = "💡မိမိတို့စိတ်ကူးထဲတွင်ရှိ​သော project ideas များ​ဆွေး​နွေးနိုင်​စေရန်။";
                break;
            case 4:
                neon_color.style.backgroundColor = "#9D00FF";
                description.innerHTML = "🔬 မိမိတို့ရှာ​ဖွေ​တွေ့ရှိ​သောနည်းပညာအ​ကြောင်းအရာများမျှ​ဝေနိုင်​စေရန်။";
                break;
            case 5:
                neon_color.style.backgroundColor = "#FF3131";
                description.innerHTML = "👨‍⚕️ မိမိတို့နားမလည်သည်များကို အကူအညီ​တောင်းနိုင်ရန်။";
                break;
        }
        await wait(1000);
        toast.classList.add("active");
        await wait(5000);  
        toast.classList.remove("active");
        await wait(500);
        display += 1;
    }
    trigger();
}
 


if(device == 'i'){
    test.classList.add("ios");
    document.body.style.maxHeight = "-webkit-fill-available"
}