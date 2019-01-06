import {forEach, forEachObject, unless, times, every, some, sortBy} from '../lib/es8-functional.js';

const array = [1, 2, 3];
forEach(array, (data) => console.log(data));
forEach(array, (data) => console.log(15 * data));

forEachObject({ a: 1, b: 2 }, (k,v)=> {console.log(`${k}: ${v}`);});

forEach([0,1,2,3,4,5,6,7,8,9], (number) => {
  unless(number % 2, () => {console.log(`${number} is even`);});
});

times(100, (number) => {
  unless(number % 2, () => {console.log(`${number} is even`);});
});

console.log(
  every([1,2,5,NaN,44], isNaN)
);
console.log(
  every([NaN,NaN,NaN], isNaN)
);
console.log(
  some([1,2,5,NaN,44], isNaN)
);

const people = [
  {firstName: 'aaa', lastName: 'ccc'},
  {firstName: 'ccc', lastName: 'bbb'},
  {firstName: 'bbb', lastName: 'aaa'},
];
const peopleOrig = people.slice(0, people.length); //copy
people.sort((a,b) => {
  return a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0;
});
console.log(people);
console.log(peopleOrig);
people.sort(sortBy('lastName'));
console.log(people);