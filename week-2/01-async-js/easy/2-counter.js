for (let index = 1; index < 1000; index++) {
  setTimeout(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    console.log(
      "Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds
    );

  }, index*1000);
}
