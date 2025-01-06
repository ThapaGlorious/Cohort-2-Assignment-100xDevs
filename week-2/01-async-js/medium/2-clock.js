
setInterval(() => {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let word = ' AM'
  if(hours>12){
    word = ' PM'
  }
  console.log(
    hours + ' : ' + minutes + ' : ' + seconds + " " + word
  );
}, 1000);
