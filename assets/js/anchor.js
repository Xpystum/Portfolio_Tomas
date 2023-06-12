


const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
    if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
      // удаляем активный класс у элемента меню
      let a = document.querySelector('.list__link-active');
      a.classList.remove('list__link-active');
      // получаем ID секции, которая текущая
      let id = entry.target.getAttribute('id');
      // обращаемся к ссылке меню, у которой href равен ID секции
      let newLink = document.querySelector(`[href="#${id}"]`).classList.add('list__link-active');
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