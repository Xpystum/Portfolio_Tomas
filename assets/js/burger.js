"use strict";

export default class burger {

    constructor(elementClass, menuClass = null){
        let ElBurger = document.querySelector(elementClass);
        let ElMenu = document.querySelector(menuClass);
        this.setEventClick(ElBurger,ElMenu  );



        // console.log(ElDiv);


    }



    setEventClick(ElBurger, ElMenu = null){
        ElBurger.addEventListener("click",(evt)=>{
            ElBurger.classList.toggle("menu__button-burger_active");
            ElMenu != null ? ElMenu.classList.toggle("nav-menu_active"): "" ;
        });
    }


    setCss(ElDiv,creatEl){

    }




}