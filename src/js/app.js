'use strict';
import '../css/index.scss';

let el = document.createElement('h1');
el.innerHTML = 'Test';
document.getElementById('main-content')
    .appendChild(el);
