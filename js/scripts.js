
var elFormNumber = document.querySelector(`.convertation`);
var elNumberInput = elFormNumber.querySelector(`.number`);
var elResult = elFormNumber.querySelector(`.result`);

elFormNumber.addEventListener(`submit`, function (evt) {
  evt.preventDefault();
  var number = Number(elNumberInput.value);
  if (number === 0) {
    elResult.textContent = number;
  }
  else if (number % 3 === 0 && number % 5 === 0) {
    elResult.textContent = `FizzBuzz`;
  } else if (number % 5 === 0) {
    elResult.textContent = `Buzz`;
  }  else if (number % 3 ===0) {
    elResult.textContent = `Fizz`;
  } else {
    elResult.textContent = number;
  }
});
