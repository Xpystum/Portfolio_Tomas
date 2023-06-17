
export default class Show_content{
    constructor(){
      this.h2_animation_content();
      this.about_section();
      this.service_section();
      this.resume_section();
      this.skills_section()
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
      for (let elm of elements) {
          observer.observe(elm);
      }

    }

    resume_section(){


      (function () {

        function onEntry(entry) {
          entry.forEach(change => {
           const { target, isIntersecting } = change; //Деструктурирующее присваивание
            if (isIntersecting) {
             
              target.classList.add("content_box_resume_left-removed_opacity");
            }
          });
        }
      
        let options = { threshold: [0.3] }; //на каком % срабатывает при попадании sectiond в область viewport
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.content_box_resume');
        for (let elm of elements) {
            observer.observe(elm);
        }

      }());

      (function () {

        function onEntry(entry) {
          entry.forEach(change => {
           const { target, isIntersecting } = change; //Деструктурирующее присваивание
            if (isIntersecting) {

              target.classList.add("resume-section-content-header_opacity_scale");
            }
          });
        }
      
        let options = { threshold: [0.3] }; //на каком % срабатывает при попадании sectiond в область viewport
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.resume-section-content-header');
        for (let elm of elements) {
            observer.observe(elm);
        }

      }());
          

    }

    skills_section(){
      
      let elements = [...document.querySelectorAll('.skills_section__skill-loader-progress')];
      let progressInteger = [...document.querySelectorAll('.skills_section__skill-loader-progress-integer')];

      function onEntry(entry) {
        entry.forEach(change => {
         const { target, isIntersecting } = change; //Деструктурирующее присваивание
          if (isIntersecting) {

              let dataProgress = target.getAttribute("data-progress");
              // присваиваем атрибут data-progress ширине прогресса
              target.style.width = dataProgress;
              // console.log(target.nextSibling);

              if(target.nextSibling != undefined || target.nextSibling != null){
                // выбираем элемент (цифра + %)
                target.nextSibling.nextSibling.style.left = dataProgress; 
              }
           
           
          }
        });
      }
    
      let options = { threshold: [0.2] }; //на каком % срабатывает при попадании sectiond в область viewport
      let observer = new IntersectionObserver(onEntry, options);
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
        for (let elm of elements) {
            observer.observe(elm);
        }
    }
}