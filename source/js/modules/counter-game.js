import {
  toNumber
} from "lodash";

export default (fpsInterval) => {

  let MMText = document.querySelectorAll('.game__counter .min')[0];
  let SSText = document.querySelectorAll('.game__counter .sec')[0];

  let now,
    then = Date.now(),
    elapsed,
    MM,
    SS,
    timer;

  function render() {
    MMText.textContent = MM;
    SSText.textContent = SS;
  }

  function refresh() {
    count = 0;
    cancelAnimationFrame(timer)
    SS = '00';
    MM = '05';
    render();
  }

  function start() {
    timer = requestAnimationFrame(tick);
    count = 1;
  }

  function end() {
    cancelAnimationFrame(timer);
  }

  function counter() {

    if (SS == '00') {
      MM = toNumber(MM) - 1;
      MM = '0' + MM;
      SS = "59";
    }

    SS = toNumber(SS) - 1;

    if (SS < 10) {
      SS = "0" + SS;
    }
    if (MM < 10) {
      MM = "0" + toNumber(MM);
    }

    render();

    if (MM == '00' && SS == '00') {
      end();
    }

  }

  // функция отрисовки
  function tick() {

    timer = requestAnimationFrame(tick);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      counter();
    }
  }

  const resultNegative = document.getElementById('result3').querySelector('.result__button');
  resultNegative.onclick = function () {
    refresh();
  }


  // Обсервер для Game
  let target = document.getElementById(`game`);
  const config = {
    className: true,
    attributes: true,
    childList: true,
    subtree: true
  };
  let count = 0;
  const callback = function () {

    if (target.classList.contains('active')) {
      if (count == 0) {
        start();
      }
    } else {
      refresh();
    }

  };

  const observer = new MutationObserver(callback);
  observer.observe(target, config);

}
