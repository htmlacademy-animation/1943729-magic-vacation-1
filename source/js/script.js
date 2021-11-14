// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add('page_load');
})


// Аннимация на секцию ПРИЗЫ - START

var target = document.getElementById('story');
const config = {
  className: true,
  attributes: true,
  childList: true,
  subtree: true
};

const callback = function (mutationsList) {
  if (target.classList.contains('active')) {

    const backgroundPage = document.querySelector('.liqud-background')
    const toPrize = document.querySelector('a[href="#prizes"]')
    
    toPrize.addEventListener("click", function () {
      backgroundPage.classList.add('waiting');
      setTimeout(() => {
        backgroundPage.classList.remove('waiting');
      }, 1000)
    }, {
      once: true
    });
  }
};

const observer = new MutationObserver(callback);
observer.observe(target, config);
// Аннимация на секцию ПРИЗЫ - END