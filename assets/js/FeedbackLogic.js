export default class FeedbackLogic{

    element_img = null; 
    element_text = null;

    constructor(){
        this.element_img = [...document.querySelectorAll('.feedback_section__wrapper-swiper-picture')];
        this.element_text = [...document.querySelectorAll('.feedback_section__swiper-text-block')];

        console.log(this.element_img)
        console.log(this.element_text)
    }



}