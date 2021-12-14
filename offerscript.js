let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let countdown = document.getElementById("countdown");
let year = document.getElementById("year");

let currentYear = new Date().getFullYear();

let currentDay = new Date().getDate();
console.log(currentDay);

// console.log(currentYear);

let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// console.log(newYearTime);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60) % 60;
  let s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Run every second
setInterval(updateCountdown, 1000);

let btn = document.getElementById("button");

function myFunction() {
  document.getElementById(
    "button"
  ).innerHTML = `Reservation done for ${currentDay}nd December `;
  // alert("Press OK to confirm the reservation");
  document.getElementById("button").style.backgroundColor = "#90EE90";
  // document.getElementById("test").innerText = "test";
}
