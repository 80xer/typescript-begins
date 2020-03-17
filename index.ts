const button = document.querySelector('.button');
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(number1.value, number2.value));
})