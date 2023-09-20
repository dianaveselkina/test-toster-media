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
document.body.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;
  document.querySelector('.pic img').src = e.target.dataset.src;

  document
    .querySelectorAll('button')
    .forEach((btn) => btn.classList.remove('active'));
  e.target.classList.add('active');
});
