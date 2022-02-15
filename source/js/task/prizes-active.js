// import counterPrizes from '../modules/counter-prizes.js';

export default () => {
  const prizes = document.getElementById('prizes');
  const list = document.querySelector('.prizes__list');
  const journeys = document.querySelector('.prizes__item--journeys');
  const cases = document.querySelector('.prizes__item--cases');
  const codes = document.querySelector('.prizes__item--codes');
  let count = 0;

  function prizesActive() {
    if (count == 0) {
      if (prizes.classList.contains('active')) {
        journeys.classList.add('active');

        setTimeout(function () {
          cases.classList.add('active');
          // counterPrizes('.prizes__item--cases', 12, 1, 7);
        }, 4800);

        setTimeout(function () {
          codes.classList.add('active');
          // counterPrizes('.prizes__item--codes', 12, 11, 900);
        }, 8000);

        setTimeout(function () {
          list.classList.add('done');
          clearInterval(activator);
        }, 5100);

        count = 1;
      }
    }
  }

  let activator = setInterval(prizesActive, 500);

}
