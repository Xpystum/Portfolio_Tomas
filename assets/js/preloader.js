"use strict";

    const mediaFiles = [...document.querySelectorAll("img")];
    const elPreloader = document.querySelector(".preloader");
    const elPreloaderInteger = document.querySelector(".preloader__integer");
    const elTags = document.querySelectorAll("header,main,footer");
    const elBody = document.querySelector(".body-hiden");
let count = 0;


document.addEventListener('DOMContentLoaded', ()=>{

    Array.from(mediaFiles).forEach((file) => {
      
        images_clone = new Image();
        images_clone.onload = img_count();
        images_clone.onerror = img_count();
        images_clone.src = file.src;

    })
})


function img_count(){
    count++;
    elPreloaderInteger.innerHTML = ((count*100) / mediaFiles.length).toFixed();

    if(count === mediaFiles.length){
        hide_section();
        elPreloaderInteger.innerHTML = 100;
    }

}

function hide_section(){
    setTimeout(()=>{
        elTags.forEach((el) => {
            switch(el.className){
                case "header header_hide":
                    el.classList.remove("header_hide")
                    break;
                case "main main_hide":
                    el.classList.remove("main_hide")
                    break;
                case "footer footer_hide":
                    el.classList.remove("footer_hide")
                    break;
            }
        });
        elPreloader.classList.toggle("preloader_hide");
        elBody.classList.toggle("body-hiden");
    },1000);
}