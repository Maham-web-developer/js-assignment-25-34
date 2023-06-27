// ====== Chapter 31-34 ======
// Question 1
// var currentDate = new Date();
// document.write(currentDate);

// Question 2
// var monthNames = [
//     "January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"
//   ];
//   var currentMonthIndex = new Date().getMonth();
//   var currentMonth = monthNames[currentMonthIndex];

//   alert("Current Month: " + currentMonth);

// Question 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayIndex = new Date().getDay();
// var currentDay = dayNames[currentDayIndex];
// var firstThreeLetters = currentDay.substring(0, 3);

// alert("Today is : " + firstThreeLetters);

// Question 4
// var currentDayIndex = new Date().getDay();

// if (currentDayIndex === 6 || currentDayIndex === 0) {
//   document.write("It's Fun day");
// } else {
//   document.write("It's not Fun day");
// }

// Question 5
// var currentDate = new Date();
// var currentDay = currentDate.getDate();

// if (currentDay < 16) {
//  document.write("First fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }

// Question 7
// var currentHours = new Date().getHours();

// if (currentHours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// Question 8
// var laterDate = new Date(2020, 11, 31);

// document.write("Last Date: " + laterDate);

// Question 10
// var currentDate = new Date();
//  document.write("On reference date"+currentDate);

// var referenceDate = new Date();

// referenceDate.setFullYear(2015, 0, 1);
// referenceDate.setHours(0, 0, 0, 0);

// var currentDate = new Date();
// var secondsElapsed = Math.floor((currentDate - referenceDate) / 1000);

// document.write(secondsElapsed+"Seconds Elapsed since the beginning of 2015");

// Question 11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);

// document.write("Current Date: " + currentDate + "<br>" + "1hour ago ,it was" + currentDate);

// Question 12
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("Current Date: " + currentDate + "100 year back ,it was" + currentDate);

// Question 13
// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);

// Question 14
// var customerName = prompt("Enter customer name:");

// var currentDate = new Date();
// var currentMonth = currentDate.toLocaleString('default', { month: 'long' });
// var currentYear = currentDate.getFullYear();

// var meterReading = Math.random() * 1000;
// var unitRate = 18.50;

// var billAmount = meterReading * unitRate;
// billAmount = billAmount.toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p> Month: " + currentMonth + " " + currentYear + "</p>");
// document.write("<p>Number of unit: " + meterReading.toFixed(2) + "</p>");
// document.write("<p>Charges per unit : " + unitRate.toFixed(2) + "</p>");
// document.write("<p>Bill Amount: " + billAmount + "</p>");













  