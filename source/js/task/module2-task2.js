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
      this.treckerLatter = this._timer / 2;
      this._styleRow = styleRow;
      this._delay = delay
      this.delayMethod = "minus";
      this.textRow = 0;
      this.prePareText();
    };

    createElement(letter) {
      const span = document.createElement(`span`);
      span.textContent = letter;
      if (!this._styleRow) {
        if (this.textRow == "0") {
          span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset+this._delay}ms`;
        } else {
          span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset+this._timer+this._delay}ms`;
        }
      } else {
        span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset+this._delay}ms`;
      }


      this._timeOffset = this.treckerLatter;
      
      if (this.delayMethod == "plus") {
        this.treckerLatter += this._timer / 2;
        if (this.treckerLatter >= this._timer) {
          this.delayMethod = 'minus';
        }
      } else {

        this.treckerLatter -= this._timer / 2;
        if (this.treckerLatter <= 0) {
          this.delayMethod = 'plus';
        }
      }

      return span;
    }

    prePareText() {
      if (!this._element) {
        return;
      }
      const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== '');

      const content = text.reduce((fragmentParent, word) => {
        const wordElement = Array.from(word).reduce((fragment, latter) => {
          fragment.appendChild(this.createElement(latter));
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


  const animationMainScreenTitle = new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`, false, 0);
  const animationHistoryScreenTitle = new AccentTypographyBuild(`.slider__item-title`, 500, `active`, `transform`, false, 0);
  const animationPrizesScreenTitle = new AccentTypographyBuild(`.prizes__title`, 500, `active`, `transform`, false, 0);
  const animationRulesScreenTitle = new AccentTypographyBuild(`.rules__title`, 500, `active`, `transform`, false, 0);
  const animationGameScreenTitle = new AccentTypographyBuild(`.game__title`, 500, `active`, `transform`, false, 0);
  
  const animationMainScreenData = new AccentTypographyBuild(`.intro__date`, 500, `active`, `transform`, true, 1000);
  
}
