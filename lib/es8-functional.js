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

export {forEach, forEachObject, unless};
