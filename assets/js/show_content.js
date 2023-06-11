(function(){

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

})();