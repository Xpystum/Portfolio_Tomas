

class PortfolioLogic{

    element_list = null;
    element_block = null;
    
    element_assoativ = new Map();

   

    constructor(){
        // для улучшение нужпо переписать логику что бы dom документы создавались здесь
        this.element_list = [...document.querySelectorAll('.portfolio_section__list')];
        this.element_block = [...document.querySelectorAll('.portfolio_section__rewiev-block-info')];
        this.set_element_assoativ();
        this.menu_switching();
        this.menu_select();
       
    }

    

    set_element_assoativ(){
        let g = 0 , t = 0;
        while(g != 1){
            let timeMass = [];
            while(t < this.element_block.length){
                timeMass.push(this.element_block[t]);
                t++;
            }
            this.element_assoativ.set(this.element_list[g], timeMass)
            g++;
        }

        for(let i = 1; i < this.element_list.length; i++ ){
            let timeMass = [];
            for(let j = 0; j < this.element_block.length; j++){
                if(this.element_list[i].dataset.menulist == this.element_block[j].dataset.menulist){
                    timeMass.push(this.element_block[j]);
                }
                this.element_assoativ.set(this.element_list[i], timeMass)
                
            }
            
        }
    }

    menu_switching(){
        for(let i = 0; i < this.element_list.length; i++){

            this.element_list[i].addEventListener("click",(event)=>{

                this.element_list.forEach(event => {
                    if(event.classList.contains("portfolio_section__list-active")){
                        event.classList.remove("portfolio_section__list-active");
                    }
                });
                event.target.classList.add("portfolio_section__list-active");
                
                this.menu_select();
            });

        }
     
    }

    menu_select(){

        for(let i = 0; i < this.element_list.length ; i++){
            if(this.element_list[i].classList.contains("portfolio_section__list-active")){
                for(let j = 0; j < this.element_block.length; j++){
                    if(this.element_block[j].classList.contains("portfolio_section__rewiev-scale")){
                        this.element_block[j].classList.remove("portfolio_section__rewiev-scale");
                    }
                }
                let massBlock = this.element_assoativ.get(this.element_list[i]);

                for(let k = 0;  k < massBlock.length; k++){
                    massBlock[k].classList.add("portfolio_section__rewiev-scale");
                }
            }

        }
    }
}