export default class slider{
    constructor(Element){

        // setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
        // setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
        let El = document.querySelector(".content-section_clips");
        this.Slider(El);


    }

    Slider(Element){

        let widthCount = window. getComputedStyle(Element);

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
}