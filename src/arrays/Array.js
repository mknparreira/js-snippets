// You can easily remove duplicates with Set in JavaScript. Its a life saver.
// const arrayDuplicated = [1, 2, 3, 4, 4, 5, 5, 6];
// console.log(removeDuplicates(arrayDuplicated));
// Result: [ 1, 2, 3, 4, 5, 6 ];
export const removeDuplicates = (arr) => [...new Set(arr)];
export const isValueInArray = (value, arr) => arr.includes(value);

//   example: arrayCountValues([ 3, 5, 3, "foo", "bar", "foo" ])
//   returns: {3:2, 5:1, "foo":2, "bar":1}
export function arrayCountValues(array) {
  const tmpArr = {};
  let key = '';
  let t = '';
  const _getType = function (obj) {
    let t = typeof obj;
    t = t.toLowerCase();
    if (t === 'object') {
      t = 'array';
    }
    return t;
  };

  const _countValue = function (tmpArr, value) {
    if (typeof value === 'number') {
      if (Math.floor(value) !== value) {
        return;
      }
    } else if (typeof value !== 'string') {
      return;
    }
    if (value in tmpArr && tmpArr.hasOwnProperty(value)) {
      ++tmpArr[value];
    } else {
      tmpArr[value] = 1;
    }
  };
  t = _getType(array);
  if (t === 'array') {
    for (key in array) {
      if (array.hasOwnProperty(key)) {
        _countValue.call(this, tmpArr, array[key]);
      }
    }
  }
  return tmpArr;
}
