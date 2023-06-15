"use strict";

export default class Slider{
    constructor(Element){

        let El = document.querySelector(Element);


        // this.Slider(El);
        this.slider_ResizeObserver(El);

    }

    // Через setInterval
    Slider_setInterval(Element){
        
        let widthCount = window.getComputedStyle(Element);

        let widthRemPx = widthCount.width.replace("px",'');
        let integerwidth = parseInt(widthRemPx);
        let iteration = 0;

    
        let timerId = setInterval(() => {

                
                let widthRemPx = widthCount.width.replace("px",'');
                let integerwidth = parseInt(widthRemPx);
            
                if(integerwidth <= 50){

                    Element.children[iteration].classList.toggle("display_block");
                    iteration++;
                    if(iteration == 3) {iteration = 0;}
                    Element.children[iteration].classList.toggle("display_block");

                }
                
        }, 170);

    }


    // через slider_ResizeObserver
    slider_ResizeObserver(Element){
        let widthCount = window.getComputedStyle(Element);
        let iteration = 0;
        const ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                

                let widthRemPx = widthCount.width.replace("px",'');
                let integerwidth = parseInt(widthRemPx);
                if(integerwidth == 0){

                    Element.children[iteration].classList.toggle("display_block");
                    iteration++;
                    if(iteration == 3) {iteration = 0;}
                    Element.children[iteration].classList.toggle("display_block");

                }

            }
          });   

        //   наблюдаем за блоком
        ro.observe(Element);

    }

    
}