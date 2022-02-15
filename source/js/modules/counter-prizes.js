// export default (item, fps, start, end) => {
//   let AnimItem = document.querySelector(`${item}`).querySelector('.prizes__desc b');
//   let count = AnimItem.textContent = start;
//   let fpsInterval = 1000 / fps;
//   let now,
//     then = Date.now(),
//     elapsed;
//   let timer;

//   function counter() {
//     const step = Math.round(fpsInterval * (end) / 1000)
//     count += step;
//     AnimItem.textContent = count;


//     if (count >= end) {
//       AnimItem.textContent = end;
//       cancelAnimationFrame(timer);
//     }
//   }

//   // функция отрисовки
//   function tick() {
//     timer = requestAnimationFrame(tick);
//     now = Date.now();
//     elapsed = now - then;

//     if (elapsed > fpsInterval) {
//       then = now - (elapsed % fpsInterval);
//       counter();
//     }
//   }


//   timer = requestAnimationFrame(tick);

// }
