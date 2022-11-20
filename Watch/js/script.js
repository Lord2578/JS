function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
}
// викликаємо функцію clock кожну секунду
setInterval(clock, 1000);



























// setInterval(function() {
//       let seconds = new Date().getSeconds();
//       document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;
  
//       let minutes = new Date().getMinutes();
//       document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
  
//       let hours = new Date().getHours();
//       document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
//     });

