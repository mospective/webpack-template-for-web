import './fonts/RomajiMincho.eot';
import './fonts/RomajiMincho.woff';
import './fonts/RomajiMincho.woff2';
import './main.scss';

import Say  from './js/child';

const calltheGreet = new Say('Hello everyone');

calltheGreet.greetCall();

console.log(calltheGreet);

console.log('Test file');

const file = 27;

console.log(`I am ${file} years old.`);
