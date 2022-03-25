const arrayMerge = (arr1, arr2) => [...arr1, ...arr2];
const arrayIntersect = (arr1, arr2) => [...new Set(arr1)].filter((item) => arr2.includes(item));
const arraySortByAsc = (arr) => arr.slice().sort((a, b) => a - b);
const arraySortByDesc = (arr) => arr.slice().sort((a, b) => b - a);
const convertArrayToAnObject = (arr) => ({ ...arr });
const isValueInArray = (value, arr) => arr.includes(value);
const removeDuplicates = (arr) => [...new Set(arr)];

// Remove false values when processing data. In Javascript, false values are false, 0, “”, null, NaN, undefined.
const removeFalseValues = (arr) => arr.filter(Boolean);

export {
  arrayMerge,
  arrayIntersect,
  arraySortByAsc,
  arraySortByDesc,
  convertArrayToAnObject,
  isValueInArray,
  removeDuplicates,
  removeFalseValues,
};
