export default class FeedbackLogic{

    // data-swiper-pagination="1"
    // data-swiper-img="1"  

    element_img = null; 
    element_text = null;

    constructor(){
        this.element_img = [...document.querySelectorAll('.feedback_section__swiper-img-general')];
        this.element_text = [...document.querySelectorAll('.feedback_section__swiper-text-block')];

        this.menu_switching_pagination();
    }

    menu_switching_pagination(){

        let element_pagination = [...document.querySelectorAll(".feedback_section__swiper-button-pagination-span")];
        this.menu_switching_pagination_add_event(element_pagination);
        // console.log(element_pagination);

    }

    menu_switching_pagination_add_event(arr_element){

        let element_img = this.element_img;

        arr_element.forEach(function(elem) {
            elem.addEventListener("click", (event)=>{
                for(let value of element_img){
                    switch(event.target.dataset.swiperPagination){
                        case '1': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){
                                this.remove_class_img();
                            }   
                        break;

                        case '2': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){

                            }
                        break;

                        case '3': 
                            if(event.target.dataset.swiperPagination == value.dataset.swiperImg){

                            }
                        break;
                    }

                }
            });
        });

    }

    remove_class_img(){
        for(let value of this.element_img){
            value.classList.remove("feedback_section__swiper-img-general-active");
        }
    }

}