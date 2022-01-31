export default () => {
  const prizes = document.getElementById('prizes');
  const list = document.querySelector('.prizes__list');
  const journeys = document.querySelector('.prizes__item--journeys');
  const cases = document.querySelector('.prizes__item--cases');
  let count = 0;

  function prizesActive() {
    if (count == 0) {
      if (prizes.classList.contains('active')) {
        journeys.classList.add('active');

        setTimeout(function () {
          cases.classList.add('active');
        }, 4800);

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
