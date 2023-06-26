export default class FeedbackLogic{

    // data-swiper-pagination="1"
    // data-swiper-img="1"  

    element_img = null; 
    element_text = null;
    element_pagination = null;

    constructor(){
        this.element_img = [...document.querySelectorAll('.feedback_section__swiper-img-general')];
        this.element_text = [...document.querySelectorAll('.feedback_section__swiper-text-block')];
        this.element_pagination = [...document.querySelectorAll(".feedback_section__swiper-button-pagination-span")];

        this.menu_switching_pagination();
    }

    menu_switching_pagination(){

        
        this.menu_switching_pagination_add_event();     
        // console.log(element_pagination);

    }

    menu_switching_pagination_add_event(){

        let element_img = this.element_img;

        for(let value of this.element_pagination) {
            value.addEventListener("click", (event)=>{
                for(let value of element_img){
                    switch(event.target.dataset.swiperPagination){
                        case '1': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){
                                this.remove_class_img();
                                this.remove_class_pagination();
                                this.add_class_img(value);
                                this.add_class_pagination(event.target);
                            }   
                        break;

                        case '2': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){
                                this.remove_class_img();
                                this.remove_class_pagination();
                                this.add_class_img(value);
                                this.add_class_pagination(event.target);
                            }
                        break;

                        case '3': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){
                                this.remove_class_img();
                                this.remove_class_pagination();
                                this.add_class_img(value);
                                this.add_class_pagination(event.target);
                            }
                        break;
                    }

                }
            });
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

    add_class_img(element){
        element.classList.add("feedback_section__swiper-img-general-active");
    }

    add_class_pagination(element){
        element.classList.add("feedback_section__swiper-button-pagination-span-active");
    }

}