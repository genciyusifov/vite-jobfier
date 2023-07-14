(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const m=document.querySelector(".cards"),g=[{id:1,img:"img/Frame.png",what:"Iş axtarın",description:"Pulsuz giriş imkanı ilə yeni iş imkanlarını kəşf edin və karyeranızda növbəti addımı atın."},{id:1,img:"img/Frame.png",what:"Iş axtarın",description:"Pulsuz giriş imkanı ilə yeni iş imkanlarını kəşf edin və karyeranızda növbəti addımı atın."},{id:1,img:"img/Frame.png",what:"Iş axtarın",description:"Pulsuz giriş imkanı ilə yeni iş imkanlarını kəşf edin və karyeranızda növbəti addımı atın."}];f(g);function p({img:t,what:r,description:n}){return`
    <div class="card w-[424px] h-[573px] rounded-2xl bg-[#F8F8F9] overflow-hidden text-center "   >
        <div class="img h-[50%] bg-red relative">
        <img class="img-card absolute left-[-20px] left-animation" src="${t}" alt="">
        <img class="img-card absolute right-[-23px] top-[40%] right-animation" src="${t}" alt="">
        <img class="img-card absolute bottom-0 left-animation" src="${t} " alt="">
    </div>

    <div class="h-full flex flex-col mt-10 gap-5">
    <div class="title text-[36px] text-start px-7">
        ${r}
    </div>
    <div class="content-card text-start px-7 ">
       ${n}
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
    `}function f(t){m.innerHTML+=t.reduce((r,n)=>r+=p(n),"")}let s=0;window.addEventListener("scroll",()=>{l()});const h=document.querySelectorAll("#rtng");function l(){s<100&&(s++,setTimeout(l,50),h.forEach(t=>{t.innerHTML=s+"+"}))}setInterval(()=>{s=0,l()},1e4);const d=document.querySelector(".nav-icon-1");d.addEventListener("click",t=>{d.classList.toggle("open")});const u=document.documentElement,v=getComputedStyle(u).getPropertyValue("--marquee-elements-displayed"),a=document.querySelector("ul.marquee-content");u.style.setProperty("--marquee-elements",a.children.length);for(let t=0;t<v;t++)a.appendChild(a.children[t].cloneNode(!0));const y=document.querySelector(".burger"),x=document.querySelector(".right");y.onclick=()=>{x.classList.toggle("rightN")};document.querySelector(".asss");
