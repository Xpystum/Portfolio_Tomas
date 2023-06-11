

export default class Show_content{
    constructor(){
        about_section();
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


}

const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
      // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
      if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        // удаляем активный класс у элемента меню
        document.querySelector('.active').classList.remove('active');
        // получаем ID секции, которая текущая
        let id = entry.target.getAttribute('id');
        // обращаемся к ссылке меню, у которой href равен ID секции
        let newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
      }
    });
  }
  
  // обратите внимание на значение опции threshold
  const options = {
    threshold: 0.55
  }
  
  const observer = new IntersectionObserver(changeNav, options);
  
  // передаём все секции в обсервер
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });