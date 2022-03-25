const isObject = (obj) => (Object.prototype.toString.call(obj) === '[object Object]');

function compareObjects(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return false;
  }

  let len = null;
  // check if they're of thesame length
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  len = Object.keys(obj1).length;

  let match = 0;

  Object.keys(obj1).forEach((i) => {
    if (obj1[i] === obj2[i]) {
      match++;
    }
  });

  if (match === len) {
    return true;
  }

  return false;
}

export { isObject, compareObjects };
