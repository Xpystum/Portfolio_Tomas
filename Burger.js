"use strict";

class Burger {

    constructor(elementClass, menuClass = null){
        let ElBurger = document.querySelector(elementClass);
        let ElMenu = document.querySelector(menuClass);
        this.setEventClick(ElBurger,ElMenu  );

    }


    setEventClick(ElBurger, ElMenu = null){
        ElBurger.addEventListener("click",(evt)=>{
            ElBurger.classList.toggle("menu__button-burger_active");
            ElMenu != null ? ElMenu.classList.toggle("nav-menu_active"): "" ;
        });
    }

}