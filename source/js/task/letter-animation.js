/* eslint-disable no-unused-vars */
export default () => {
  class AccentTypographyBuild {
    constructor(
      elementSelector,
      timer,
      classForActivate,
      property,
      styleRow,
      delay
    ) {
      this._TIME_SPACE = 100;

      this._elementSelector = elementSelector;
      this._timer = timer;
      this._classForActivate = classForActivate;
      this._property = property;
      this._element = document.querySelector(this._elementSelector);
      this._timeOffset = this._timer;
      this.treckerLetter = this._timer / 2;
      this._styleRow = styleRow;
      this._delay = delay;
      this.delayMethod = `minus`;
      this.textRow = 0;
      this.prePareText();
    }

    createElement(letter) {
      const span = document.createElement(`span`);
      span.textContent = letter;
      let property = this._property;
      let propertyDuration = this._timer;
      let propertyDelay;
      // Проверка на анимацию второй строки
      if (!this._styleRow) {
        if (this.textRow === 1) {
          propertyDelay = this._timeOffset + this._timer + this._delay;
        } else {
          propertyDelay = this._timeOffset + this._delay;
        }
      } else {
        propertyDelay = this._timeOffset + this._delay;
      }

      span.style.transition = `${property} ${propertyDuration}ms ease ${propertyDelay}ms`;

      this._timeOffset = this.treckerLetter;

      // Логика увеличения и уменьшении задержки в анимациях букв
      if (this.delayMethod === `plus`) {
        this.treckerLetter += this._timer / 2;
        if (this.treckerLetter >= this._timer) {
          this.delayMethod = `minus`;
        }
      } else {

        this.treckerLetter -= this._timer / 2;
        if (this.treckerLetter <= 0) {
          this.delayMethod = `plus`;
        }
      }

      return span;
    }

    prePareText() {
      if (!this._element) {
        return;
      }
      const text = this._element.textContent.trim().split(` `).filter((letter) => letter !== ``);

      const content = text.reduce((fragmentParent, word) => {
        const wordElement = Array.from(word).reduce((fragment, letter) => {
          fragment.appendChild(this.createElement(letter));
          return fragment;
        }, document.createDocumentFragment());
        const wordContainer = document.createElement(`span`);
        wordContainer.classList.add(`text__word`);
        this.textRow += 1;
        wordContainer.appendChild(wordElement);
        fragmentParent.appendChild(wordContainer);
        return fragmentParent;
      }, document.createDocumentFragment());

      this._element.innerHTML = ``;
      this._element.appendChild(content);
    }

    runAnimation() {
      if (!this._element) {
        return;
      }
      this._element.classList.add(this._classForActivate);
    }

    destroyAnimation() {
      this._element.classList.remove(this._classForActivate);
    }
  }


  const animationMainScreenTitle = new AccentTypographyBuild(`.intro__title`, 300, `active`, `transform`, false, 0);
  const animationHistoryScreenTitle = new AccentTypographyBuild(`.slider__item-title`, 300, `active`, `transform`, false, 0);
  const animationPrizesScreenTitle = new AccentTypographyBuild(`.prizes__title`, 300, `active`, `transform`, false, 0);
  const animationRulesScreenTitle = new AccentTypographyBuild(`.rules__title`, 300, `active`, `transform`, false, 0);
  const animationGameScreenTitle = new AccentTypographyBuild(`.game__title`, 300, `active`, `transform`, false, 0);

  const animationMainScreenData = new AccentTypographyBuild(`.intro__date`, 300, `active`, `transform`, true, 500);

};
