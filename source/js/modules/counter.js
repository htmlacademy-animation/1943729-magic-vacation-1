import {
  toNumber
} from "lodash";

export default (fpsInterval) => {
  let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  let MMText = document.querySelectorAll('.game__counter .min')[0];
  let SSText = document.querySelectorAll('.game__counter .sec')[0];

  let now,
    then = Date.now(),
    elapsed,
    MM,
    SS,
    next;

  function render() {
    MMText.textContent = MM;
    SSText.textContent = SS;
  }

  function refresh() {
    count = 0;
    cancelAnimationFrame(tick)
    SS = '00';
    MM = '00';
    next = true;
    render()
  }

  function start() {
    console.log('Старт таймера Game');
    requestAnimationFrame(tick);
    count = 1;
  }

  function end() {
    console.log('end')
    cancelAnimationFrame(tick);
    next = false;
  }

  function counter() {
    if (next) {
      SS = toNumber(SS) + 1;
      if (SS < 10) {
        SS = "0" + SS;
      }
      if (MM < 10) {
        MM = "0" + toNumber(MM);
      }
      if (SS >= 60) {
        MM = toNumber(MM) + 1;
        MM = '0' + MM;
        SS = "00";
      }

      render()
      if (MM >= '05') {
        end()
      }
    }
  }

  // функция отрисовки
  function tick() {

    requestAnimationFrame(tick);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      counter();
    }
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
        start()
      }
    } else {
      refresh()
    }

  };

  const observer = new MutationObserver(callback);
  observer.observe(target, config);

}
