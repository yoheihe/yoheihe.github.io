'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let curentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (curentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (curentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * curentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      dots.push(button);document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current'); 
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    curentIndex++;
    updateButtons();
    moveSlides();
    // const slideWidth = slides[0].getBoundingClientRect().width;
    // ul.style.transform = `translateX(${-1 * slideWidth * curentIndex}px)`;
  }); 

  prev.addEventListener('click', () => {
    curentIndex--;
    updateButtons();
    moveSlides();
    // const slideWidth = slides[0].getBoundingClientRect().width;
    // ul.style.transform = `translateX(${-1 * slideWidth * curentIndex}px)`;
  }); 

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal'); 
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden'); 
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden'); 
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden'); 
    close.click();
  });
}