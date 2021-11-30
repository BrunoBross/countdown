// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(String(days).length == 1){
    days = '0'+days
  }
  if(String(hours).length == 1){
    hours = '0'+hours
  }
  if(String(minutes).length == 1){
    minutes = '0'+minutes
  }
  if(String(seconds).length == 1){
    seconds = '0'+seconds
  }

  // Display the result in the element with id="demo"
  document.querySelector("#days > h1").innerHTML = days
  document.querySelector("#hours > h1").innerHTML = hours
  document.querySelector("#minutes > h1").innerHTML = minutes
  document.querySelector("#seconds > h1").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".content > h1").innerHTML = "NEW YEAR!!";
  }
}, 1000);