import Logo from './logo.png';

export default function loadHomePage() {
  const logo = document.createElement('img');
  logo.src = Logo;
  logo.classList.add('logo');

  const copy = document.createElement('p');
  copy.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
  culpa qui officia deserunt mollit anim id est laborum.`;

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  const leftBtn = document.createElement('button');
  leftBtn.textContent = 'Previous';
  leftBtn.classList.add('leftBtn');
  leftBtn.addEventListener('click', scroll);
  const rightBtn = document.createElement('button');
  rightBtn.textContent = 'Next';
  rightBtn.classList.add('rightBtn');
  rightBtn.addEventListener('click', scroll);
  const slides = document.createElement('div');
  slides.classList.add('slides');

  const slide1 = document.createElement('div');
  slide1.classList.add('slide');
  slide1.textContent = '1';

  const slide2 = document.createElement('div');
  slide2.classList.add('slide');
  slide2.textContent = '2';

  const slide3 = document.createElement('div');
  slide3.classList.add('slide');
  slide3.textContent = '3';

  const slide4 = document.createElement('div');
  slide4.classList.add('slide');
  slide4.textContent = '4';

  const dots = document.createElement('div');
  dots.classList.add('dots');
  const dot1 = document.createElement('div');
  dot1.classList.add('dot', 'current-dot');
  dot1.addEventListener('click', scrollToPosition);
  const dot2 = document.createElement('div');
  dot2.classList.add('dot');
  dot2.addEventListener('click', scrollToPosition);
  const dot3 = document.createElement('div');
  dot3.classList.add('dot');
  dot3.addEventListener('click', scrollToPosition);
  const dot4 = document.createElement('div');
  dot4.classList.add('dot');
  dot4.addEventListener('click', scrollToPosition);
  
  slides.append(slide1, slide2, slide3, slide4);
  carousel.append(leftBtn, slides, rightBtn);
  dots.append(dot1, dot2, dot3, dot4);
  content.append(logo, copy, carousel, dots);
}

var scrollLength = 0; 
var scrollInterval = 25;

function scroll(e) {
  if(e.target.classList.contains('rightBtn') && scrollLength > -75) {
    scrollLength -= scrollInterval;
  } else if (e.target.classList.contains('leftBtn') && scrollLength < 0) {
    scrollLength += scrollInterval;
  }
  document.querySelector('.slides').style.transform = `translate(${scrollLength.toString()}%)`;
}

function scrollToPosition(e) {
  var index = Array.from(e.target.parentNode.children).indexOf(e.target);
  document.querySelector('.slides').style.transform = `translate(${index * -25}%)`;
  document.querySelector('.current-dot').classList.toggle('current-dot');
  document.querySelectorAll('.dot')[index].classList.add('current-dot');
}