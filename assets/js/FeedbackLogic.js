export default class FeedbackLogic{


    element_img = null; 
    element_text = null;
    element_pagination = null;
    element_button_arrow = null;

    iterator_img_and_text = 1;
    

    constructor(){
        
        this.element_img = [...document.querySelectorAll('.feedback_section__swiper-img-general')];
        this.element_text = [...document.querySelectorAll('.feedback_section__swiper-text-block')];
        this.element_pagination = [...document.querySelectorAll(".feedback_section__swiper-button-pagination-span")];
        this.element_button_arrow = [...document.querySelectorAll(".feedback_section__swiper-button-block")];

        this.menu_switching_pagination();
        this. menu_switching_arrow_button();
    }


    menu_switching_pagination(){

        let element_img = this.element_img;
        let element_text = this.element_text;
        for(let value of this.element_pagination) {
            value.addEventListener("click", (event)=>{
                for(let value of element_img){
                    switch(event.target.dataset.swiperPagination){
                        case '1': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){
                                this.remove_class_img();
                                this.remove_class_pagination();
                                this.remove_class_text();
                                this.add_class_img(value);
                                this.add_class_pagination(event.target);
                                this.set_iterator(value.dataset.swiperImg);

                                this.add_class_text(this.iterator_text_comparison());
                            }   
                        break;

                        case '2': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){
                                this.remove_class_img();
                                this.remove_class_pagination();
                                this.remove_class_text();
                                this.add_class_img(value);
                                this.add_class_pagination(event.target);
                                this.set_iterator(value.dataset.swiperImg);

                                this.add_class_text(this.iterator_text_comparison());
                            }
                        break;

                        case '3': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){
                                    this.remove_class_img();
                                this.remove_class_pagination();
                                this.remove_class_text();
                                this.add_class_img(value);
                                this.add_class_pagination(event.target);
                                this.set_iterator(value.dataset.swiperImg);
                                this.add_class_text(this.iterator_text_comparison());
                            }   
                        break;
                    }

                }
            });
        }
    }

    menu_switching_arrow_button(){
        for(let value of this.element_button_arrow){
            value.addEventListener("click", (event)=>{
                
                switch(event.target.dataset.moveArrow){
                    case "next":

                        if(this.iterator_img_and_text == 3){
                            this.iterator_img_and_text = 1;
                        }
                        else{
                            this.iterator_img_and_text = this.iterator_img_and_text + 1;
                        }

                        this.remove_class_img();
                        this.remove_class_pagination();
                        this.remove_class_text();

                        this.add_class_img(this.iterator_img_comparison());
                        this.add_class_pagination(this.iterator_pagination_comparison());
                        this.add_class_text(this.iterator_text_comparison());

                        break;

                    case "prev":
                      
                    if(this.iterator_img_and_text == 1){
                        this.iterator_img_and_text = 3;
                    }
                    else{
                        this.iterator_img_and_text = this.iterator_img_and_text - 1;
                    }

                    this.remove_class_img();
                    this.remove_class_pagination();
                    this.remove_class_text();

                    this.add_class_img(this.iterator_img_comparison());
                    this.add_class_pagination(this.iterator_pagination_comparison());
                    this.add_class_text(this.iterator_text_comparison());

                    break;
                }

            });
        }
    }   

    set_iterator(integer){

        if(!Number.isNaN(integer)){
           if(typeof(integer) == "string"){
                integer = Number(integer);
           }
        }
    
        if(1 >= integer <= 3){
            this.iterator_img_and_text = integer;
        }
        else{
            this.iterator_img_and_text = 1;
        }
    }

    remove_class_img(){
        for(let value of this.element_img){
            value.classList.remove("feedback_section__swiper-img-general-active");
        }
    }

    remove_class_pagination(){
        for(let value of this.element_pagination){
            value.classList.remove("feedback_section__swiper-button-pagination-span-active");
        }
    }

    remove_class_text(){
        for(let value of this.element_text){
            value.classList.remove("feedback_section__swiper-text-block-active");
        }
    }

    add_class_img(element){
        // element - передаем элемент dom (img)
        element.classList.add("feedback_section__swiper-img-general-active");
    }

    add_class_pagination(element){
         // element - передаем элемент dom (pagination)
        element.classList.add("feedback_section__swiper-button-pagination-span-active");
    }

    add_class_text(element){ 
        // imgData - передаем значение data от img
        // for(let value of this.element_text){
        //     if(imgData == value.dataset.textFeedback){
        //         value.classList.add("feedback_section__swiper-text-block-active");
        //     }
        // }
        element.classList.add("feedback_section__swiper-text-block-active");
    }

    iterator_img_comparison(){
        for(let value of this.element_img){
            if(Number(value.dataset.swiperImg) == this.iterator_img_and_text){
                return value;
            }
        }
    }

    iterator_pagination_comparison(){
        for(let value of this.element_pagination){
            if(Number(value.dataset.swiperPagination) == this.iterator_img_and_text){
                return value;
            }
        }
    }

    iterator_text_comparison(){
        for(let value of this.element_text){
            if(Number(value.dataset.textFeedback) == this.iterator_img_and_text){
                return value;
            }
        }
    }


}