// NavBar Menu 
const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const navList = document.querySelector(".nav_list");

openNav.addEventListener('click', () => {
  navList.classList.add('show');
});

// Close NavBar Menu on Link Clicked
const navLink = document.querySelectorAll('li');

navLink.forEach((navLinks)=>{
  navLinks.addEventListener('click', ()=>{
    navList.classList.remove('show');
  });
})


//Scroll Reveal Animation for the pages
ScrollReveal({ 
    reset: true, 
    distance: '60%',
    duration: 2500,
    delay: 400,
  })
ScrollReveal().reveal('.header_wrap', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.design_wrap', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.state_wrap', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.free_wrap', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.footer_wrap', { delay: 500, origin: 'right' });
