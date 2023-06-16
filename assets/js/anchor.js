


  const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
      // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
      if(entry.isIntersecting && entry.intersectionRatio >= 0.20 ) {
        // удаляем активный класс у элемента меню
        document.querySelector('.list__link-active').classList.remove('list__link-active');
        // получаем ID секции, которая текущая
        let id = entry.target.getAttribute('id');
        console.log(id);
        // обращаемся к ссылке меню, у которой href равен ID секции
        let newLink = document.querySelector(`[href="#${id}"]`).classList.add('list__link-active');
      }
    });
  }
  

  
const options = {
  threshold: 0.20
  //проблема при адаптиве (на мобильных устройствах threshold никогда не пересечёт 20% надо уменьшать)
}

// передаём все секции в обсервер
const observer = new IntersectionObserver(changeNav, options);
const sections =  document.querySelectorAll('section');
console.log(sections);
sections.forEach((section) => {
    observer.observe(section);
});
 