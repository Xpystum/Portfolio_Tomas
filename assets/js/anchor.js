"use strict";


let observer = null;
let flagOptions = null;
const mediaQuery = window.matchMedia('(max-width: 993px)')
let options = {
  threshold: 0.15
}

const changeNav = (entries, observer) => {
   
  entries.forEach((entry) => {
      if(entry.isIntersecting && entry.intersectionRatio >= flagOptions - 0.05) {
        // удаляем активный класс у элемента меню
        let likActive = document.querySelector('.list__link-active');
        if(likActive){
          likActive.classList.remove('list__link-active');
        }
        // получаем ID секции, которая текущая
        let id = entry.target.getAttribute('id');
        // обращаемся к ссылке меню, у которой href равен ID секции
        let newLink = document.querySelector(`[href="#${id}"]`);

        if(newLink){
          newLink.classList.add('list__link-active');
        }

        let BurgerMenu = document.querySelector(".menu__button-burger");
        BurgerMenu.classList.remove("menu__button-burger_active");

        let NavMenu =  document.querySelector(".nav-menu");
        NavMenu.classList.remove("nav-menu_active");
      }
  });
}


const sections =  document.querySelectorAll('section');
observer = new IntersectionObserver(changeNav, options);
// передаём все секции в обсервер
sections.forEach((section) => {
  observer.observe(section);
});

mediaQuery.onchange = (e) => {

  if(e.matches) {
    observer.threshold = 0.10;
    console.log(observer.threshold);
    flagOptions = observer.threshold;
  } else {
    observer.threshold = 0.40;
    console.log(observer.threshold);
    flagOptions = observer.threshold;
  }

};




