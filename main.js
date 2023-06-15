"use strict";

import Slider from './Slider.js';
import Burger from './Burger.js';
import ShirinkMenu from './ShirinkMenu.js';
import show_content from './Show_content.js'; 
import './anchor.js'; 


new Burger(".menu__button-burger",".nav-menu");
new Slider(".content-section_clips");
new ShirinkMenu();  
new show_content();
