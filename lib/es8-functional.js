/**
 * @param {Array} array 
 * @param {Function} fn 
 */
const forEach = (array, fn) => {
  for (let i=0; i < array.length; i++) {
    fn(array[i]);
  }
};

/**
 * @param {Object} object 
 * @param {Function} fn 
 */
const forEachObject = (object, fn) => {
  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      fn(property, object[property]);
    }
  }
};

const unless = (predicate, fn) => {
  if(!predicate) fn();
};

const times = (time, fn) => {
  for (let i=0; i<time; i++) {
    fn(i);
  }
};

const every = (array, fn) => {
  let result = true;
  for (const element of array) {
    result = result && fn(element);
  }
  return result;
};

const some = (array, fn) => {
  let result = false;
  for (const element of array) {
    result = result || fn(element);
  }
  return result;
};

const sortBy = (property) => {
  return (a, b) => {
    return a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
  };
};

export {forEach, forEachObject, unless, times, every, some, sortBy};
