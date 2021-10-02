import {
  removeDuplicates,
  isValueInArray,
  arrayCountValues,
} from './arrays/Array.js';

const arrayDuplicated = [1, 2, 3, 4, 4, 5, 5, 6];
const removeDups = removeDuplicates(arrayDuplicated);
console.log(removeDups);

const names = ['Limon', 'Mahbub', 'Alam', 'Tanvir'];
const isInclude = isValueInArray('e', names);
console.log(isInclude);

const arrayValues = [3, 5, 3, 'foo', 'bar', 'foo'];
const countingArrayValues = arrayCountValues(arrayValues);
console.log(countingArrayValues);
