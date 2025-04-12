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
