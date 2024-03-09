// let menuIcon  = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// let sections = document.querySelectorAll( 'section' );
// let navLinks = document.querySelectorAll('header nav a');

// wwindow.onsroll = () =>  {
//     sections.forEach(sec => {
//         let top = window.scrollY
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id'); 
//             if(top >= offset && top < offset  + height) {
//                 navLinks.forEach(nlink => {
//                   document.querySelector('header nav a[href*=' + id + ']').classList.add('active') 
//                 });
//             };
//     });

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scroll > 100);

//         menuIcon.classList.toggle('bx-x');
//         navbar.classList.toggle('active');
//  };
//  ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('#home,.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  gsap.from(".home-content",{
    y:-200,
    duration:1.5,
  })
  gsap.from(".home-img",{
    y:100,
    duration:1.5
  })
  gsap.from(".navbar ",{
    x:200,
    duration:2
  })
  gsap.from(".logo ",{
    x:-200,
    duration:2
  })
  gsap.from(".about-content",{
    x:200,
    duration:1.5,
    delay:3
  })
  gsap.from(".about-img",{
    x:-200,
    duration:1.5,
    delay:3
  })
  gsap.from(".services",{
    x:-200,
    duration:1.5,
    delay:6
  })



  const scriptURL = 'https://script.google.com/macros/s/AKfycbxrwud8EWZ87dIZyviUHa4k_WB7t4v4UcLJp0uyI4TgPLOD1d2qYUshISKm6JYFngYR/exec'

  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{msg.innerHTML="Message is sent"
  setTimeout(function(){msg.innerHTML=""
},5000)
form.reset()})
    
    .catch(error => console.error('Error!', error.message))
  });

  
