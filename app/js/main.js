

let faqText = document.querySelectorAll('.faq__text');
let faqItem = document.querySelectorAll('.faq__item');

document.querySelector('.faq__list-right').addEventListener('click', function(event) {
  if (!event.target.classList.contains('faq__item')) return;
  event.target.querySelector('.faq__text').classList.toggle('hidden');
});

document.querySelector('.faq__list-left').addEventListener('click', function(event) {
  if (!event.target.classList.contains('faq__item')) return;
  event.target.querySelector('.faq__text').classList.toggle('hidden');
});

const items = document.querySelectorAll('.faq__list-left > .faq__item');
items.forEach((item,index) => {
    item.setAttribute('data-bs-toggle', 'collapse');
    item.setAttribute('data-bs-target', '#collapse-'+index);
    const itemText = item.querySelector('.faq__text');
    itemText.setAttribute('id','collapse-'+index );
    itemText.classList.add('collapse');
});

const items2 = document.querySelectorAll('.faq__list-right > .faq__item');
items2.forEach((item,index) => {
    item.setAttribute('data-bs-toggle', 'collapse');
    item.setAttribute('data-bs-target', '#collapse-'+index);
    const itemText = item.querySelector('.faq__text');
    itemText.setAttribute('id','collapse-'+index );
    itemText.classList.add('collapse');
});




document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'); //находим наш 
  burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  });
});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.mobile-menu'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('mobile-menu--active'))  { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
});

let wrapperBurger = document.querySelector('.burger__wrapper');
let mobileBurger = document.querySelector('.burger');
let headerH = document.querySelector('.header').clientHeight;
let header = document.querySelector('.header-js');
document.onscroll = function() {
  let scroll = window.scrollY;
  if (scroll > 700) {
    header.classList.add("flex");
  }
  if (scroll < 700) {
    header.classList.remove("flex");
  }
  if (scroll > 600) {
    wrapperBurger.classList.add('red');
  }
  if (scroll < 600) {
    wrapperBurger.classList.remove('red');
  }
}



  const bodyLock = document.querySelector('body');
  const mobileLink = document.querySelectorAll('.mobile-menu a');
  const mobileMenu = document.querySelector('.mobile-menu');
  const burger = document.querySelector('.burger');
    mobileLink.forEach((el) => {
      el.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu--active');
        burger.classList.remove('burger--active');
        bodyLock.classList.remove('lock');
    })
 })






      
    




