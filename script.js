//timer

function startCountdown() {
  const targetDate = new Date('December 25, 2024 00:00:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft >= 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / (1000));


      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
  }

  setInterval(updateTimer, 1000);
}

startCountdown();


//hero
gsap.from('.hero-1', 1.2, {opacity:0, y:-150, delay: 0.5})
gsap.from('.hero-2', 1.2, {opacity:0, y:-150, delay: 1.2})
gsap.from('.hero-3', 1.2, {opacity:0, y:150, delay: 1.9})
gsap.from('.hero-4', 1.2, {opacity:0, y:150, delay: 2.5})
gsap.from('.hero-5', 1.2, {opacity:0, y:150, delay: 3.8})
gsap.from('.hero-6', 1.2, {opacity:0, y:-150, delay: 5.1})
gsap.from('.hero-7', 1.2, {opacity:0, y:150, delay: 6.5})
gsap.from('.hero-8', 1.2, {opacity:0, y:150, delay: 4.5})
gsap.from('.hero__description', 1.2, {opacity:0, y:-150, delay: 5.3})
gsap.from('.hero-btn', 1.2, {opacity:0, y:150, delay: 5.5})

//about
gsap.from('.about-christmas__title', 1.2, {opacity:0, x:-150, delay: 10.5})
gsap.from('.about-christmas__description', 1.2, {opacity:0, x:-150, delay: 10.9})
gsap.from('.about-btn', 1.2, {opacity:0, y:150, delay: 11})
gsap.from('.about-icons', 1.2, {opacity:0, x:-150, delay: 11.3})
gsap.from('.right-image', 1.2, {opacity:0, y:-150, delay: 11.7})

//WHY
gsap.from('.why-title', 1.2, {opacity:0, x:-150, delay: 15.5})
gsap.from('.text-1', 1.2, {opacity:0, x:-150, delay: 15.9})
gsap.from('.text-2', 1.2, {opacity:0, y:150, delay: 16.3})
gsap.from('.center-image', 1.2, {opacity:0, x:-150, delay: 16.8})

