"use strict";

import Slider from './slider.js';
import Burger from './Burger.js';
import ShirinkMenu from './ShirinkMenu.js';
import show_content from './show_content.js'; 
import './anchor.js'; 
import PortfolioLogic from '../../PortfolioLogic.js'
import './fslightbox.js'
import FeedbackLogic from './FeedbackLogic.js'

new Burger(".menu__button-burger",".nav-menu");
new Slider(".content-section_clips");
new ShirinkMenu();  
new show_content();
new PortfolioLogic();
new FeedbackLogic();



let element = document.querySelector(".footer-container-scroll");

element.addEventListener("click",(event)=>{
    window.scrollTo(0,0)
});

