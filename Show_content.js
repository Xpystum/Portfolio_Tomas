
class Show_content{
    constructor(){
      this.about_section();
      this.service_section();
    }

    about_section(){

        let left_element = document.querySelector('.about-section__img');
        let right_element = document.querySelector('.about-section__text-content');
        let count = 2;

            function onEntry(entry) {
                entry.forEach(change => {
                const { target, isIntersecting } = change;
                  if (isIntersecting) {
                    target.classList.add('display_opacity');
                    if(count != 0){
                        //для оптимизациия что бы каждый раз не проходить по DOM 
                        var elementLeft = target.querySelector(".about-section__img");
                        var elementRight = target.querySelector(".about-section__text-content");
                        count--;

                    }
                    
                    
                    if(elementLeft != null && elementRight != null){
                        elementLeft.classList.add('translateX');
                        elementRight.classList.add('translateX');
                    }
                   
                  }
                });
              }
        
            
            let options = { threshold: [0.1] }; //на каком % срабатывает при попадании sectiond в область viewport
            let observer = new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('section');
            for (let elm of elements) {
                observer.observe(elm);
            }

    } 

    service_section(){

      function onEntry(entry) {
        entry.forEach(change => {
         const { target, isIntersecting } = change; //Деструктурирующее присваивание
          if (isIntersecting) {
    
            target.classList.add('text-content__main-container-opacity');
            target.classList.add("text-content__main-container-margin");
          }
        });
      }
    
      this.h2_animation_content();
      let options = { threshold: [0.3] }; //на каком % срабатывает при попадании sectiond в область viewport
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.text-content__main-container');
      console.log(elements);
      for (let elm of elements) {
          observer.observe(elm);
      }

    }
  
    h2_animation_content(){

        function onEntry(entry) {
          entry.forEach(change => {
          const { target, isIntersecting } = change;
            if (isIntersecting) {
              target.classList.add('header-h2_active');
            }
          });
        }


        let options = { threshold: [0.1] }; //на каком % срабатывает при попадании sectiond в область viewport
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.header-h2_letter_spacing');
        console.log(elements);
        for (let elm of elements) {
            observer.observe(elm);
        }
    }
}