/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// =========================****TIMER****=========================

const eventDate = new Date("May 20, 2025 00:00:00").getTime();

                function updateTimer() {
                const now = new Date().getTime();
                const timeLeft = eventDate - now;

                if (timeLeft < 0) {
                    document.getElementById("countdown-timer").innerHTML = "The event has started!";
                    clearInterval(timerInterval);
                    return;
                }

                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                document.getElementById("countdown-timer").innerHTML = 
                    `${days}d ${hours}h ${minutes}m ${seconds}s`;
                }

                const timerInterval = setInterval(updateTimer, 1000);
                updateTimer();


// /*========================= events ===========================*/

const buttons = document.querySelectorAll('.learn-more');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.classList.toggle('open');
        button.textContent = card.classList.contains('open') ? 'Show Less' : 'RULES & REGULATIONS';
      });
    });

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
// //     reset: true
// });

// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
// sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .achieve__container',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 
// sr.reveal('.skills__data, .work__img, .contact__input', {interval: 200}); 












