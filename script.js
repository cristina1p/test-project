var day = document.querySelector("#day");
var hourDOM = document.querySelector("hour");
var minute = document.querySelector("#minute");
var ampm = document.querySelector("ampm");

function calculateTime() {
  //console.log("The page has loaded");
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date();
  var dayNumber = date.getDay();
  //console.log(dayNames[dayNumber]);
  day.textContent = dayNames[dayNumber];

  var hour = date.getHours();
  console.log(hour);
  hour = hour % 12;
  hour = hour ? hour : 12;
  hour = hour < 10 ? `0${hour}` : hour;
  hourDOM.textContent = hour;
  //console.log(hour);

  var minute = date.getMinutes();
  console.log(minute);
}
