import {Slider} from './slider.js';
import {tabs} from './tabs.js';

const block = document.querySelector('.block');
const blockWrapper = document.querySelector('.block__wrapper');

const headerInTab = document.querySelector('.content__header');
const tab = document.querySelector('.content__tab');

const mySlider = new Slider(block, blockWrapper);
const myTabs = new tabs(headerInTab, tab);
console.log(mySlider.maxSlide)