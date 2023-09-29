let time = 17476;
const counter = document.getElementById('counter1');
setInterval(updateCounter, 1000);
function updateCounter() {
  const hour = Math.floor(time / 3600);
  const min = Math.floor(time / 342);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;
  counter.innerHTML = `${hour}: ${min}: ${sec}`;
  time--;
}
function imgUrl(image) {
  document.getElementById('img-slider').src = image;
}
