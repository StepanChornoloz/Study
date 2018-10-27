import { calc } from './scripts/calc';
import { trafficLighter } from './scripts/traffic-lighter';

import './lesson_10.scss';

const initBtn = document.querySelector('#calcBtn');
initBtn.onclick = calc;
const lightersHtmlElements = document.querySelectorAll('.traffic-lighter');

for(let i = 0; i < lightersHtmlElements.length; i++) {
  trafficLighter(lightersHtmlElements[i]);
}