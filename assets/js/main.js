"use strict";

import Slider from './slider.js';
import Burger from './Burger.js';
import ShirinkMenu from './ShirinkMenu.js';
import Show_content from './Show_content.js'; 



new Burger(".menu__button-burger",".nav-menu");
new Slider(".content-section_clips");
new ShirinkMenu();  
new Show_content();
