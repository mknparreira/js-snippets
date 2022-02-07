import {
  removeDuplicates,
  isValueInArray,
  arrayCountValues,
  arrayMerge,
  arrayIntersect,
  removeFalseValues,
} from './library/Array.js';

import displayValuesAsObject from './library/Console.js';
import convertArrayToAnObject from './library/Object.js';
import { isNumber, averageNum } from './library/Number.js';

console.info('---------- Remove duplicated values inside an array ----------');
const arrayDuplicated = [1, 2, 3, 4, 4, 5, 5, 6];
const removeDups = removeDuplicates(arrayDuplicated);
console.log(removeDups);

console.info('---------- Verifing if value exists inside an array ----------');
const names = ['Limon', 'Mahbub', 'Alam', 'Tanvir'];
const isInclude = isValueInArray('e', names);
console.log(isInclude);

console.info('---------- Array count values ----------');
const arrayValues = [3, 5, 3, 'foo', 'bar', 'foo'];
const countingArrayValues = arrayCountValues(arrayValues);
console.table(countingArrayValues);

console.info('---------- Find the max or the min values inside an array ----------');
const arrayExampleFindMaxAndMinValues = [2, 8, 15, 4];
console.log(Math.max(...arrayDuplicated));
console.log(Math.min(...arrayExampleFindMaxAndMinValues));

console.info('---------- Shorthand object prperty assignment ----------');
displayValuesAsObject('Maikon Parreira', 'mknparreira@gmail.com', true);

console.info('---------- Convert the array to an object ----------');
const arrayPlanets = ['Saturn', 'Earth', 'Venus', 'Uranus', 'Mercury'];
const objPlanets = convertArrayToAnObject(arrayPlanets);
console.log(objPlanets);

console.info('---------- Merge arrays ----------');
const planets1 = ['Saturn', 'Earth', 'Uranus', 'Mercury'];
const planets2 = ['Venus', 'Earth', 'Mars', 'Jupiter'];
const arrayMergeResult = arrayMerge(planets1, planets2);
console.log(arrayMergeResult);

console.info('---------- Array intersect ----------');
const arrIntersect1 = ['Saturn', 'Earth', 'Uranus', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
const arrIntersect2 = ['Saturn', 'Earth', 'Uranus'];
const arrayIntersectResult = arrayIntersect(arrIntersect1, arrIntersect2);
console.log(arrayIntersectResult);

console.info('---------- Remove False values in an array ----------');
const falseValues = ['0', '', null, 0, false, 'A', 'B', undefined, NaN, true, 5];

const arrayRemoveFalseValues = removeFalseValues(falseValues);
console.log(arrayRemoveFalseValues);

console.info('---------- Is number ----------');
console.log(isNumber(1.5));

console.info('---------- Average value ----------');
console.log(averageNum(55, 8, 37, 4));
