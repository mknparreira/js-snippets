import {
  removeDuplicates,
  isValueInArray,
  arrayCountValues,
  arrayMerge,
  arrayIntersect,
  removeFalseValues,
  arraySortByAsc,
  arraySortByDesc,
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

console.info('---------- Convert an array to an object ----------');
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

console.info('---------- Array Map ----------');
const people = [
  { name: 'Todd', position: 'Accountant' },
  { name: 'Jessica', position: 'Secretary' },
  { name: 'Jerry', position: 'Janitor' },
  { name: 'Bob', position: 'Project-Lead' },
];
const positions = people.map((person) => person.position);
console.log(positions);

console.info('---------- Updating all the elements of an array ----------');
const usersBalance = [
  { name: 'Jane', balance: 100.00 },
  { name: 'John', balance: 55.25 },
];

// define pure methods for our `map`
const double = (amount) => amount * 2;
const doubleUserBalance = (user) => ({
  ...user,
  balance: double(user.balance),
});

// transform all the users
const usersWithDoubledBalance = usersBalance.map(doubleUserBalance);
console.log(usersWithDoubledBalance);

console.info('---------- Array Filter ----------');
const applicants = [
  { name: 'James', age: 25 },
  { name: 'John', age: 23 },
  { name: 'Lisa', age: 17 },
  { name: 'Matthew', age: 18 },
  { name: 'Anthony', age: 16 },
];

const qualified = applicants.filter((person) => person.age >= 18);
console.log(qualified);

console.info('---------- Array Reduce ----------');
const numbersToReduce = [30, 40, 50, 20];
const resultReduce = numbersToReduce.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(resultReduce);

console.info('---------- Array Every ----------');
console.info('Tests whether all elements in the array pass the condition. It returns a Boolean value.');
console.info('Array.every() all values pass. Array.some() at least one');
const applicantsEvery = [25, 13, 6, 8, 14, 59, 56, 2, 40];
const qEvery = applicantsEvery.every((num) => num >= 10);
console.log(qEvery);

console.info('---------- Array Every ----------');
console.info('Checking that all values satisfy a group of champions.');
const champions = [
  { name: 'Darius', level: 7 },
  { name: 'Katarina', level: 12 },
  { name: 'Swain', level: 9 },
];

const hasExpectedLevel = (expectedLevel) => (champion) => champion.level >= expectedLevel;
const hasUltimate = hasExpectedLevel(6);
const chamionsAllHaveUltimate = champions.every(hasUltimate);
console.log(chamionsAllHaveUltimate);

console.info('---------- Array sort by Asc ----------');
const arrSortAsc = [25, 13, 6, 8, 14, 59, 56, 2, 40];
console.log(arraySortByAsc(arrSortAsc));

console.info('---------- Array sort by Desc ----------');
const arrSortDesc = [25, 13, 6, 8, 14, 59, 56, 2, 40];
console.log(arraySortByDesc(arrSortDesc));
