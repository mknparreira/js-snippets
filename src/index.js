import { removeDuplicates, isValueInArray } from './arrays/Array.js';

console.log('execute removeDuplicates() ==>');
const arrayDuplicated = [1, 2, 3, 4, 4, 5, 5, 6];
console.log(removeDuplicates(arrayDuplicated));
console.log('finish removeDuplicates()  <==');

console.log('execute isValueInArray() ==>');
const names = ['Limon', 'Mahbub', 'Alam', 'Tanvir'];
const isInclude = isValueInArray('e', names);
console.log(isInclude);
console.log('finish isValueInArray()  <==');
