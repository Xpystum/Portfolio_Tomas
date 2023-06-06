"use strict";

export default class ShirinkMenu{

    constructor(){

        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 || window.pageYOffset > 10) {

            document.querySelector("header").style.padding = "6px 0";
        }
        else{

            document.querySelector("header").style.padding = "15px 0";


        }

    }


}