export default () => {
  const prizes = document.getElementById('prizes');
  const journeys = document.querySelector('.prizes__item--journeys');
  const cases = document.querySelector('.prizes__item--cases');
  let count = 0;

  function prizesActive() {
    if (count == 0) {
      if (prizes.classList.contains('active')) {
        journeys.classList.add('active');

        setTimeout(function(){
            cases.classList.add('active');
        }, 4800);

        
        count = 1;
      }
    }
  }
  setInterval(prizesActive, 500);

}
