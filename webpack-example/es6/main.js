import Point from './Point.js';

import '../style.scss';

var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);