"use strict";

import Slider from './slider.js';
import Burger from './Burger.js';
import ShirinkMenu from './ShirinkMenu.js';
import show_content from './Show_content.js'; 
import './anchor.js'; 
import './fslightbox.js'
import PortfolioLogic from './PortfolioLogic.js'
import FeedbackLogic from './FeedbackLogic.js'

new Burger(".menu__button-burger",".nav-menu");
new Slider(".content-section_clips");
new ShirinkMenu();  
new show_content();
new PortfolioLogic();
new FeedbackLogic();

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});
