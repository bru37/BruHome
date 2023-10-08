window.onload = function () {
  document.querySelector(".disp").innerHTML =
    "너무 어렵다 이거 하나 푸는데 2시간 걸리내";
};
//
// let tab_host = document.querySelector(".tab_host");
// tab_host.onclick = function () {
//   this.style.color = "red";
//   this.style.backgroundColor = "pink";
// };
//잘못풀었음...각각에 주어야하는데 전체에 배경색과글자색을줬음

const $changeColor = document.querySelectorAll(".tab");
const $selectText = document.querySelectorAll(".block");
$changeColor.forEach((el) => {
  el.addEventListener("click", (event) => {
    const { target } = event;
    $changeColor.forEach((el) => {
      if (el.classList.contains("on")) {
        el.classList.remove("on");
      }
      target.classList.add("on");
    });

    $selectText.forEach((l) => {
      if (!l.innerHTML.includes(el.innerHTML)) {
        l.style.display = "none";
      } else l.style.display = "block";
    });
  });
});
