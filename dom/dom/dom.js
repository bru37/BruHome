window.onload = function () {
  document.querySelector(".disp").innerHTML =
    "너무 어렵다 이거 하나 푸는데 2시간 걸리내";
};

let tab_host = document.querySelector('.tab_host');
tab_host.onclick = function(){
    this.style.color = 'red';
    this.style.backgroundColor = 'pink';
}
// 3시간 걸렸내요 ...