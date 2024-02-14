/* JavaScript for the calendar */

// Get references to HTML elements for displaying date information
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Create a new Date object representing today's date
const today = new Date();

// Arrays to store names of weekdays and months
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Display date information in the HTML elements
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();


/* JavaScript for the clock */

// Get references to HTML elements representing clock hands
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// Update clock hands every second
setInterval(() => {
    // Create a new Date object representing the current time
    let day = new Date();

    // Calculate rotation angles for hour, minute, and second hands
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    // Apply rotation transformations to clock hands
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

