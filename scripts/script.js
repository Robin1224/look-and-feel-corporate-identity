function increase(barID) {
  // Change the variable to modify the speed of the number increasing from 0 to (ms)
  let SPEED = 15;
  // Retrieve the percentage value
  let limit = parseInt(document.getElementById(barID).innerHTML, 10);

  for(let i = 0; i <= limit; i++) {
      setTimeout(function () {
          document.getElementById(barID).innerHTML = i + "%";
      }, SPEED * i);
  }
}

increase("value1");
increase("value2");