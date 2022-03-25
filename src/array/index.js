import * as Array from './Array.js';

console.info('----------1. Remove duplicated values inside an array ----------');
const arrayDuplicated = [1, 2, 3, 4, 4, 5, 5, 6];
const removeDups = Array.removeDuplicates(arrayDuplicated);
console.log(removeDups); // [ 1, 2, 3, 4, 5, 6 ]

console.info('----------2. Verify if value exists inside an array ----------');
const names = ['Limon', 'Mahbub', 'Alam', 'Tanvir'];
const isInclude = Array.isValueInArray('e', names);
console.log(isInclude); // Returns false

console.info('----------3. Find the max or the min values inside an array ----------');
const arrayExampleFindMaxAndMinValues = [2, 8, 15, 4];

const min = Math.min(...arrayExampleFindMaxAndMinValues);
const max = Math.max(...arrayExampleFindMaxAndMinValues);

console.table({ min, max }); // 2,15

console.info('----------4. Convert an array to an object ----------');
const arrayPlanets = ['Saturn', 'Earth', 'Venus', 'Uranus', 'Mercury'];
const objPlanets = Array.convertArrayToAnObject(arrayPlanets);
console.log(objPlanets);
/* {
  '0': 'Saturn',
  '1': 'Earth',
  '2': 'Venus',
  '3': 'Uranus',
  '4': 'Mercury'
} */

console.info('----------5. Mergging arrays ----------');
const planets1 = ['Saturn', 'Earth', 'Uranus', 'Mercury'];
const planets2 = ['Venus', 'Earth', 'Mars', 'Jupiter'];
const arrayMergeResult = Array.arrayMerge(planets1, planets2);
console.log(arrayMergeResult);
/* [
  'Saturn', 'Earth',
  'Uranus', 'Mercury',
  'Venus',  'Earth',
  'Mars',   'Jupiter'
] */

console.info('----------6. Array intersect ----------');
const arrIntersect1 = ['Saturn', 'Earth', 'Uranus', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
const arrIntersect2 = ['Saturn', 'Earth', 'Uranus'];
const arrayIntersectResult = Array.arrayIntersect(arrIntersect1, arrIntersect2);
console.log(arrayIntersectResult); // [ 'Saturn', 'Earth', 'Uranus' ]

console.info('----------7. Remove False values in an array ----------');
const falseValues = ['0', '', null, 0, false, 'A', 'B', undefined, NaN, true, 5];

const arrayRemoveFalseValues = Array.removeFalseValues(falseValues);
console.log(arrayRemoveFalseValues); // [ '0', 'A', 'B', true, 5 ]

console.info('----------8. Array Map ----------');
const people = [
  { name: 'Todd', position: 'Accountant' },
  { name: 'Jessica', position: 'Secretary' },
  { name: 'Jerry', position: 'Janitor' },
  { name: 'Bob', position: 'Project-Lead' },
];
const positions = people.map((person) => person.position);
console.log(positions); // [ 'Accountant', 'Secretary', 'Janitor', 'Project-Lead' ]

console.info('----------9. Updating every the elements of an array ----------');
const usersBalance = [
  { name: 'Jane', balance: 100.00 },
  { name: 'John', balance: 55.25 },
];

// Define pure methods for our `map`
const double = (amount) => amount * 2;
const doubleUserBalance = (user) => ({
  ...user,
  balance: double(user.balance),
});

// Transform all the users
const usersWithDoubledBalance = usersBalance.map(doubleUserBalance);
console.log(usersWithDoubledBalance);
/* [
    { name: 'Jane', balance: 200 },
    { name: 'John', balance: 110.5 }
  ] */

console.info('----------10. Array Filter ----------');
const applicants = [
  { name: 'James', age: 25 },
  { name: 'John', age: 23 },
  { name: 'Lisa', age: 17 },
  { name: 'Matthew', age: 18 },
  { name: 'Anthony', age: 16 },
];

const qualified = applicants.filter((person) => person.age >= 18);
console.log(qualified);
/* [
    { name: 'James', age: 25 },
    { name: 'John', age: 23 },
    { name: 'Matthew', age: 18 }
  ] */

console.info('----------11. Array Reduce ----------');
const numbersToReduce = [30, 40, 50, 20];
const resultReduce = numbersToReduce.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(resultReduce); // Returns 140

console.info('----------12. Array Every ----------');
console.info('Tests whether all elements in the array pass the condition. It returns a Boolean value.');
console.info('Array.every() all values pass. Array.some() at least one');
const applicantsEvery = [25, 13, 6, 8, 14, 59, 56, 2, 40];
const qEvery = applicantsEvery.every((num) => num >= 10);
console.log(qEvery); // Returns false

console.info('---------- 12.1 Array Every ----------');
console.info('Checking that all values satisfy a group of champions.');
const champions = [
  { name: 'Darius', level: 7 },
  { name: 'Katarina', level: 12 },
  { name: 'Swain', level: 9 },
];

const hasExpectedLevel = (expectedLevel) => (champion) => champion.level >= expectedLevel;
const hasUltimate = hasExpectedLevel(6);
const chamionsAllHaveUltimate = champions.every(hasUltimate);
console.log(chamionsAllHaveUltimate); // Returns true

console.info('----------13. Array sort by Asc ----------');
const arrSortAsc = [25, 13, 6, 8, 14, 59, 56, 2, 40];
console.log(Array.arraySortByAsc(arrSortAsc));

console.info('----------14. Array sort by Desc ----------');
const arrSortDesc = [25, 13, 6, 8, 14, 59, 56, 2, 40];
console.log(Array.arraySortByDesc(arrSortDesc));
