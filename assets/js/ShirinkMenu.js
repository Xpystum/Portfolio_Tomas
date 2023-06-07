"use strict";

export default class ShirinkMenu{

    constructor(){

        document.addEventListener("scroll", (event)=>{

            if (window.pageYOffset > 200) {

                document.querySelector("header").style.padding = "6px 0";
                
            }
            else{
    
                document.querySelector("header").style.padding = "15px 0";
    
            }
        });
       
    }

}
