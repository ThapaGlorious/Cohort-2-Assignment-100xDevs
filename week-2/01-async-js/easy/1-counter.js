setInterval(() => {
   let currentDate = new Date();
   let hours = currentDate.getHours();
   let minutes = currentDate.getMinutes();
   let seconds = currentDate.getSeconds();
   console.log("Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
}, 1000);

