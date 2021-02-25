class Slider {

  constructor(mainBlock, wrapperBlock) {
    this.mainBlock = mainBlock;
    this.wrapperBlock = wrapperBlock
    this.renderArrows(mainBlock)
    

    this.countSlider = 0;
    this.currentSlide = this.wrapperBlock.children[this.countSlider]
    this._maxSlide = wrapperBlock.childElementCount;

    this.renderSlide()
  }

  renderArrows(block) {
    let nextArrow = document.createElement('a'), prevArrow = document.createElement('a');
    nextArrow.classList.add('block__arrows')
    nextArrow.classList.add('next')

    prevArrow.classList.add('block__arrows')
    prevArrow.classList.add('prev')

    nextArrow.innerHTML = "&#9658"
    prevArrow.innerHTML = "&#9668;"

    nextArrow.addEventListener('click', () => this.nextSlide() )
    prevArrow.addEventListener('click', () => this.prevSlide() )
    block.append(nextArrow, prevArrow);
  }

  renderSlide() {
    this.currentSlide = this.wrapperBlock.children[this.countSlider]
    this.currentSlide.classList.add('active')
  }

  nextSlide() {
    this.currentSlide.classList.remove('active')
    this.countSlider += 1;

    if(this.countSlider >= this._maxSlide) {
      this.countSlider = 0;
    }
    this.renderSlide()

  }

  prevSlide() {
    this.currentSlide.classList.remove('active')
    if(this.countSlider - 1 == -1) {
      this.countSlider = this._maxSlide;
    }
    this.countSlider -= 1;
    this.renderSlide()
  }

};

export {Slider as Slider};