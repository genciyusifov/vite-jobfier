// import "./input.css"
import "./style.css"

const cardsEl = document.querySelector(".cards")
const obj = [
  {
    id: 1,
    img: "img/Frame.png",
    what: "Iş axtarın",
    description: "Pulsuz giriş imkanı ilə yeni iş imkanlarını kəşf edin və karyeranızda növbəti addımı atın."
  },
  {
    id: 1,
    img: "img/Frame.png",
    what: "Iş axtarın",
    description: "Pulsuz giriş imkanı ilə yeni iş imkanlarını kəşf edin və karyeranızda növbəti addımı atın."
  },
  {
    id: 1,
    img: "img/Frame.png",
    what: "Iş axtarın",
    description: "Pulsuz giriş imkanı ilə yeni iş imkanlarını kəşf edin və karyeranızda növbəti addımı atın."
  }

]

render(obj)

function objectController({ img, what, description }) {
  return `
    <div class="card w-[424px] h-[573px] rounded-2xl bg-[#F8F8F9] overflow-hidden text-center "   >
        <div class="img h-[50%] bg-red relative">
        <img class="img-card absolute left-[-20px] left-animation" src="${img}" alt="">
        <img class="img-card absolute right-[-23px] top-[40%] right-animation" src="${img}" alt="">
        <img class="img-card absolute bottom-0 left-animation" src="${img} " alt="">
    </div>

    <div class="h-full flex flex-col mt-10 gap-5">
    <div class="title text-[36px] text-start px-7">
        ${what}
    </div>
    <div class="content-card text-start px-7 ">
       ${description}
    </div>
    <div class="line h-[1.5px] w-[343px] mx-auto "></div>
    <div class="button flex  items-center  pl-7 pb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="20" fill="#785BF4"/>
            <mask id="mask0_1_156" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="24" height="24">
            <rect x="8" y="8" width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1_156)">
            <path d="M14.4 26L13 24.6L22.6 15H14V13H26V25H24V16.4L14.4 26Z" fill="white"/>
            </g>
        </svg>
        <div class="ml-3">Daha Çox</div>
    </div>
    </div>
    </div>
    `
}

function render(array) {
  cardsEl.innerHTML += array.reduce((acc, item) => acc += objectController(item), "")
}

let x = 0;

window.addEventListener("scroll", () => {
  yazdir()
}
)


const raiting = document.querySelectorAll("#rtng")
function yazdir() {

  if (x < 100) {
    x++;
    setTimeout(yazdir, 50);
    raiting.forEach(div => {
      div.innerHTML = x + "+"
    })
  }
}


setInterval(() => {
  x = 0
  yazdir()
}, 10000);

const icon = document.querySelector('.nav-icon-1');
icon.addEventListener('click', (event) => {
  icon.classList.toggle("open");

});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


const burger = document.querySelector(".burger")
const right = document.querySelector(".right")

burger.onclick = ()=> {
  right.classList.toggle("rightN")
}

const dex = document.querySelector(".asss")
