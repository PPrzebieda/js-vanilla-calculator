const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const btnEqual = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");

const getButtons = function () {
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let value = event.target.dataset.num;
      console.log(value);
      screen.value += value;
    });
  });

  btnEqual.addEventListener("click", function (event) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  btnClear.addEventListener("click", function (event) {
    screen.value = "";
  });
};

getButtons();
