"use strict";

const mediaFiles = [...document.querySelectorAll("img")];
    const elPreloader = document.querySelector(".preloader");
    const elPreloaderInteger = document.querySelector(".preloader__integer");
    const elTags = document.querySelectorAll("header,main,footer");
    const elBody = document.querySelector(".body-hiden");

document.addEventListener('DOMContentLoaded', ()=>{

    let count = 0;
    console.log(mediaFiles);
    Array.from(mediaFiles).forEach((file,index) => {
        let promise = img_count(file, count);
        promise.then(
            script => (console.log("картинки загружены")),
            error => (console.log("ошибка загрузок картинок"))
        )
        count++;
    })
})



function img_count(file, count){

    return new Promise((resolve, reject) => {

    file.onerror = () => { count++;  reject(new Error(`Ошибка загрузки картинки ${file}`)) };

    file.onload = () => { 
        count++;
        console.log(count);
        elPreloaderInteger.innerHTML = ((count*100) / mediaFiles.length).toFixed();
        resolve(console.log(file, " успешно загружен"));
    }

    if(count === mediaFiles.length){
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
            elPreloaderInteger.innerHTML = 100;
    }

    });
}