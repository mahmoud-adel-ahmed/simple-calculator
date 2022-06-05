let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let btn_equal = document.querySelector(".btn-equal");
let btn_clear = document.querySelector(".btn-clear");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    let number = document.querySelectorAll("[data-num]")[i].dataset.num;
    typeof number === "string" ? +number : number;
    screen.value += number;
  });
});

btn_equal.addEventListener("click", function () {
  let value = eval(screen.value) ?? 0;
  screen.value = value.toFixed(2);
});

btn_clear.addEventListener("click", function () {
  screen.value = "";
});

eval();
