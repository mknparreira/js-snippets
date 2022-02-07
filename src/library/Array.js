export const removeDuplicates = (arr) => [...new Set(arr)];
export const isValueInArray = (value, arr) => arr.includes(value);
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

export const arrayMerge = (arr1, arr2) => [...arr1, ...arr2];
export const arrayIntersect = (arr1, arr2) => [...new Set(arr1)].filter((item) => arr2.includes(item));

// Remove false values when processing data. In Javascript, false values are false, 0, “”, null, NaN, undefined.
export const removeFalseValues = (arr) => arr.filter(Boolean);
