"use strict";

export default class ShirinkMenu{

    constructor(){

        if (window.pageYOffset > 10) {

            document.querySelector("header").style.padding = "6px 0";
            
        }
        else{

            document.querySelector("header").style.padding = "15px 0";

        }

    }
    
}
