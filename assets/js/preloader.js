"use strict";

const mediaFiles = document.querySelectorAll("img");
    const elPreloader = document.querySelector(".preloader");
    const elPreloaderInteger = document.querySelector(".preloader__integer");
    const elTags = document.querySelectorAll("header,main,footer");
    const elBody = document.querySelector(".body-hiden");

document.addEventListener('DOMContentLoaded', ()=>{

    let i = 0;

    console.log(mediaFiles);

    Array.from(mediaFiles).forEach((file,index) => {


        file.onload = () =>{
            i++;
            elPreloaderInteger.innerHTML = ((i*100) / mediaFiles.length).toFixed();
            console.log(i);

            
            if(i === mediaFiles.length){
                elTags.forEach((el) =>{
                    console.log(el.className);
                    switch(el.className){
                        case "header header_hide":
                            el.classList.toggle("header_hide")
                            break;
                        case "main main_hide":
                            el.classList.toggle("main_hide")
                            break;
                        case "footer footer_hide":
                            el.classList.toggle("footer_hide")
                            break;
                    }
                    elPreloader.classList.toggle("preloader_hide");
                    elBody.classList.toggle("body-hiden");
                    elPreloaderInteger.innerHTML = 100;
                    
                })
            }

        }
        
    })
})