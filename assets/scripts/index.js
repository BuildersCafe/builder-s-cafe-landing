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
                neon_color.style.boxShadow = "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff";
                description.innerHTML = "đŹ áá­áá­áá˛áˇááŤáááŹáá°ááťáŹá¸áá˛áˇâáá˝áąáˇááŻáśááźáŽá¸áááşá¸áážáŽá¸áá˝áŹáááŹá¸âááźáąáŹááźáááşá";
                break;
            case 1:
                neon_color.style.backgroundColor = "#FF6700";
                neon_color.style.boxShadow = "0 0 5px #FF6700, 0 0 10px #FF6700, 0 0 15px #FF6700";
                description.innerHTML = "đ¨ áá­áá­áá­áŻáˇáááşááŽá¸ááŹá¸âááąáŹ projects ááťáŹá¸áĄáŹá¸ááźááá­áŻááşâááąáááşá";
                break;
            case 2:
                neon_color.style.backgroundColor = "#E0E722";
                neon_color.style.boxShadow = "0 0 5px #E0E722, 0 0 10px #E0E722, 0 0 15px #E0E722";
                description.innerHTML = "đ¤ áá­áá­áá­áŻáˇáááşááŽá¸âááąâááąáŹ project áĄáá˝ááş co-founder áážáŹáá­áŻááşáááşá";
                break;
            case 3:
                neon_color.style.backgroundColor = "#808080";
                neon_color.style.boxShadow = "0 0 5px #808080, 0 0 10px #808080, 0 0 15px #808080";
                description.innerHTML = "đĄáá­áá­áá­áŻáˇáá­ááşáá°á¸áá˛áá˝ááşáážá­âááąáŹ project ideas ááťáŹá¸âáá˝áąá¸âáá˝áąá¸áá­áŻááşâááąáááşá";
                break;
            case 4:
                neon_color.style.backgroundColor = "#9D00FF";
                neon_color.style.boxShadow = "0 0 5px #9D00FF, 0 0 10px #9D00FF, 0 0 15px #9D00FF";
                description.innerHTML = "đŹ áá­áá­áá­áŻáˇáážáŹâáá˝áąâáá˝áąáˇáážá­âááąáŹáááşá¸áááŹáĄâááźáąáŹááşá¸áĄááŹááťáŹá¸ááťážâááąáá­áŻááşâááąáááşá";
                break;
            case 5:
                neon_color.style.backgroundColor = "#FF3131";
                neon_color.style.boxShadow = "0 0 5px #FF3131, 0 0 10px #FF3131, 0 0 15px #FF3131";
                description.innerHTML = "đ¨ââď¸ áá­áá­áá­áŻáˇááŹá¸ááááşáááşááťáŹá¸áá­áŻ áĄáá°áĄááŽâááąáŹááşá¸áá­áŻááşáááşá";
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