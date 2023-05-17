'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'width/height viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(
  //   s1Coords.left + window.pageXOffset,
  //   s1Coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const allSeactions = document.querySelectorAll('.section');

document.getElementById('section--1');
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookie for improved functionality and analytics. <button class= "btn btn-close-cookie"> Got it </button>`;

//При методах prepend() & append() елемент становится дочерним по отношению к родителю (child)
// header.prepend(message);
header.append(message); //Отображение блока куки не может быть в 2 местах одновременно, поэтому он будет в конце. один человек не может быть в 2 местах одновременно.

// header.append(message.cloneNode(true)); // Мы клонируем блок сообщения о куки и тогда он может быть одновременно в 2 местах в документе на странице.

//ещё 2 метода. При этих методах, элемент становится братом или сестрой.
// header.before(message);
// // header.after(message);

// удалить эелемент.
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); //для методов appned() и prepend, т.к. в них есть потомки.
  });

// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Pate navigation with event delegation
//1. add evenst listenerto common parent element. Добавляем обработчкий событий к общему родительскому элементу.
//2. Determine what element originated the event. Определить, какой элемент вызвал событие

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  //Mathcing strategy. Посолько событие может происходить и на родительском блоке (у него нету href ссылок), то нужно проверить этот момень (нас интересуют только элементы со ссылками)
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//186
//Creating inserting elements
// const allSeactions = document.querySelectorAll('.section');

// document.getElementById('section--1');
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML = `We use cookie for improved functionality and analytics. <button class= "btn btn-close-cookie"> Got it </button>`;

// //При методах prepend() & append() елемент становится дочерним по отношению к родителю (child)
// // header.prepend(message);
// header.append(message); //Отображение блока куки не может быть в 2 местах одновременно, поэтому он будет в конце. один человек не может быть в 2 местах одновременно.

// // header.append(message.cloneNode(true)); // Мы клонируем блок сообщения о куки и тогда он может быть одновременно в 2 местах в документе на странице.

// //ещё 2 метода. При этих методах, элемент становится братом или сестрой.
// // header.before(message);
// // // header.after(message);

// // удалить эелемент.
// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message); //для методов appned() и prepend, т.к. в них есть потомки.
//   });

//187 стили
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height);

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //изменить свойство стиля эелемнта в css файле с помощью javascript.
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

//Non standart
//Не будет работать со свойством designer
// console.log(logo.designer); // если бы добавили новое свойство designer со свойством Jonas.
// //можно сделать так:
// console.log(logo.getAttribute('designer')); //полчит аттрибут
// logo.setAttribute('company', 'bankist'); //

// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //data attributes дата атрибут
// console.log(logo.dataset.versionNumber);

//Classes классы.
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); //not includes

// //dont use
// logo.className = 'jonas'; //так работать не надо, потому что этот метод и свойство перекроет

// //188 scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1Coords = section1.getBoundingClientRect();
//   console.log(s1Coords);

//   console.log(e.target.getBoundingClientRect());
//   console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//   console.log(
//     'width/height viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//scrolling
// window.scrollTo(
//   s1Coords.left + window.pageXOffset,
//   s1Coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1Coords.left + window.pageXOffset,
//   top: s1Coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// //189 Events
// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: great!');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 30000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: great!');
// };

//190-191 Bubbling and caprure. Всплытие и перехват
//191 Event porpagination

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('LINK', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget === this);

//   //Stop event propogation!
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

//192 Event delegation. Делегация событий

//193 traversing dom. обход DOM
// const h1 = document.querySelector('h1');

// //going downwaards: child. обход/спуск вниз к дочерниму эелементу
// console.log(document.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'blue';

//going upwards: parents. Обход/подъем вверх к родительсокму эелементу.

// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--color-secondary)';
// h1.closest('h1').style.background = 'var(--color-tertiary)';

//going sideways: siblings. Путь боком, братья и сестры
// console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

//194 tabbed component - компанент со вкладками (вкладки)
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t =>
//   t.addEventListener('click', () => { // Такой подход замедлит работу страницы, в условиях, если бы данных вкладок было много.
//     console.log('TAB');
//   })
// );

//берём более быстрый и оптимизированный метод

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //guard clause(защитная оговорка)
  if (!clicked) return;

  //remove the actiive classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //activate tab
  clicked.classList.add('operations__tab--active');

  //activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//195.Menu fade animations
//DRY , dont repeat yoruself,  не повторяемся, а наш код повторяется, поэтому создадим функцию и проведём рефакторинг
// const handleHover = function (e, opacity) {
//   console.log(this, e.currentTarget);
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     console.log(link);
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };

//было
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     console.log(link);
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opecity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     console.log(link);
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

//можно сделать так
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//но можно сделать лучше.

// nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', handleHover.bind(1));

// //196 Sticky navigation. Плавающая (липкая) навигация
// //событие прокрутки
// const initalCoords = section1.getBoundingClientRect();
// console.log(initalCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (this.window.scrollY > initalCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//197. Sticky navigator с помощью нового пользовательского API.

//Сначала узнаем получше что такое new Users API,а потом сделаем плавающий(гибкий) панель навигации.
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.add('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: [0],
// });
// headerObserver.observe(header);

//199 Lazy Loading images.
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  //replace src with data-src Images
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

//200
//start Carousel slider
//SLiders const
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let currentSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(1.2) translateX(0px)';
slider.style.overflow = 'visible';

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `
    <button class = "dots__dot" data-slide = "${i}"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

activateDot(0);

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') previousSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    console.log('DOT');
    const { slide } = e.target.dataset;
    goToSlide(slide);
  }
});

//202 dom lifecycle.
document.addEventListener('click', function (e) {
  console.log('HTML parsed and DOM three built', e);
});
