import {forEach, forEachObject, unless} from '../lib/es8-functional.js';

const array = [1, 2, 3];
forEach(array, (data) => console.log(data));
forEach(array, (data) => console.log(15 * data));

forEachObject({a: 1, b: 2}, (k,v)=> {console.log(`${k}: ${v}`);});

forEach([0,1,2,3,4,5,6,7,8,9], (number) => {
  unless(number % 2, () => {console.log(`${number} is even`);});
});