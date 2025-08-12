const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentYear = new Date().getFullYear

const Veendam = new Date(`October 17 2025 16:00:00`)

function updateCountdown() {
    const currentTime = new Date();
    const diff = Veendam - currentTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60; 
    const s = Math.floor(diff / 1000 ) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000)







const days2 = document.getElementById('days2')
const hours2 = document.getElementById('hours2')
const minutes2 = document.getElementById('minutes2')
const seconds2 = document.getElementById('seconds2')


const BruchhausenVilsen = new Date(`June 20 2026 16:00:00`)

function updateCountdown2() {
    const currentTime = new Date();
    const diff = BruchhausenVilsen - currentTime

    const d2 = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h2 = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m2 = Math.floor(diff / 1000 / 60 ) % 60; 
    const s2 = Math.floor(diff / 1000 ) % 60;

    days2.innerHTML = d2;
    hours2.innerHTML = h2 < 10 ? '0' + h2 : h2;
    minutes2.innerHTML = m2 < 10 ? '0' + m2 : m2;
    seconds2.innerHTML = s2 < 10 ? '0' + s2 : s2;
}

setInterval(updateCountdown2, 1000)
