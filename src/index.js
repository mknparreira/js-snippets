import { faker } from '@faker-js/faker';
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
import { convertArrayToAnObject, isObject, compareObjects } from './library/Object.js';
import { isNumber, averageNum } from './library/Number.js';

console.info('----------1. Remove duplicated values inside an array ----------');
const arrayDuplicated = [1, 2, 3, 4, 4, 5, 5, 6];
const removeDups = removeDuplicates(arrayDuplicated);
console.log(removeDups);

console.info('----------2. Verifing if value exists inside an array ----------');
const names = faker.datatype.array(3);
const isInclude = isValueInArray('e', names);
console.log(isInclude); // Returns false

console.info('----------3. Array count values ----------');
const arrayValues = [3, 5, 3, 'foo', 'bar', 'foo'];
const countingArrayValues = arrayCountValues(arrayValues);
console.table(countingArrayValues);

console.info('----------4. Find the max or the min values inside an array ----------');
const arrayExampleFindMaxAndMinValues = [2, 8, 15, 4];
console.log(Math.max(...arrayDuplicated));
console.log(Math.min(...arrayExampleFindMaxAndMinValues));

console.info('----------5. Shorthand object prperty assignment ----------');
displayValuesAsObject('Maikon Parreira', 'mknparreira@gmail.com', true);

console.info('----------6. Convert an array to an object ----------');
const arrayPlanets = faker.datatype.array(5);
const objPlanets = convertArrayToAnObject(arrayPlanets);
console.log(objPlanets);

console.info('----------7. Mergging arrays ----------');
const planets1 = ['Saturn', 'Earth', 'Uranus', 'Mercury'];
const planets2 = ['Venus', 'Earth', 'Mars', 'Jupiter'];
const arrayMergeResult = arrayMerge(planets1, planets2);
console.log(arrayMergeResult);

console.info('----------8. Array intersect ----------');
const arrIntersect1 = ['Saturn', 'Earth', 'Uranus', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
const arrIntersect2 = ['Saturn', 'Earth', 'Uranus'];
const arrayIntersectResult = arrayIntersect(arrIntersect1, arrIntersect2);
console.log(arrayIntersectResult);

console.info('----------9. Remove False values in an array ----------');
const falseValues = ['0', '', null, 0, false, 'A', 'B', undefined, NaN, true, 5];

const arrayRemoveFalseValues = removeFalseValues(falseValues);
console.log(arrayRemoveFalseValues);

console.info('----------10. Is number ----------');
console.log(isNumber(1.5));

console.info('----------11. Average value ----------');
console.log(averageNum(55, 8, 37, 4));

console.info('----------12. Array Map ----------');
const people = [
  { name: 'Todd', position: 'Accountant' },
  { name: 'Jessica', position: 'Secretary' },
  { name: 'Jerry', position: 'Janitor' },
  { name: 'Bob', position: 'Project-Lead' },
];
const positions = people.map((person) => person.position);
console.log(positions);

console.info('----------13. Updating all the elements of an array ----------');
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

// transform all the users
const usersWithDoubledBalance = usersBalance.map(doubleUserBalance);
console.log(usersWithDoubledBalance);

console.info('----------14. Array Filter ----------');
const applicants = [
  { name: 'James', age: 25 },
  { name: 'John', age: 23 },
  { name: 'Lisa', age: 17 },
  { name: 'Matthew', age: 18 },
  { name: 'Anthony', age: 16 },
];

const qualified = applicants.filter((person) => person.age >= 18);
console.log(qualified);

console.info('----------15. Array Reduce ----------');
const numbersToReduce = [30, 40, 50, 20];
const resultReduce = numbersToReduce.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(resultReduce);

console.info('----------16. Array Every ----------');
console.info('Tests whether all elements in the array pass the condition. It returns a Boolean value.');
console.info('Array.every() all values pass. Array.some() at least one');
const applicantsEvery = [25, 13, 6, 8, 14, 59, 56, 2, 40];
const qEvery = applicantsEvery.every((num) => num >= 10);
console.log(qEvery);

console.info('---------- Array Every ----------');
console.info('17. Checking that all values satisfy a group of champions.');
const champions = [
  { name: 'Darius', level: 7 },
  { name: 'Katarina', level: 12 },
  { name: 'Swain', level: 9 },
];

const hasExpectedLevel = (expectedLevel) => (champion) => champion.level >= expectedLevel;
const hasUltimate = hasExpectedLevel(6);
const chamionsAllHaveUltimate = champions.every(hasUltimate);
console.log(chamionsAllHaveUltimate);

console.info('----------18. Array sort by Asc ----------');
const arrSortAsc = [25, 13, 6, 8, 14, 59, 56, 2, 40];
console.log(arraySortByAsc(arrSortAsc));

console.info('----------19. Array sort by Desc ----------');
const arrSortDesc = [25, 13, 6, 8, 14, 59, 56, 2, 40];
console.log(arraySortByDesc(arrSortDesc));

console.info('----------20. Is object ----------');
const premierLeagueClub = { name: 'Chelsea', points: 7 };
console.log(isObject(premierLeagueClub));

console.info('----------21. Compare objects ----------');
const premierLeagueClubB = { name: 'Arsenal', points: 7 };
const premierLeagueClubC = { name: 'City', points: 7 };
console.log(compareObjects(premierLeagueClubB, premierLeagueClubC));

/* REFERENCE
https://medium.com/@sbsurjeet66/13-javascript-array-methods-bf3df9cdeab0
https://medium.com/@sandeepbanuka2209/5-must-know-javascript-one-liners-e1aad834852a
https://nikakharebava.medium.com/javascript-array-methods-you-must-know-examples-5ffd90b10dad
https://ranamahmud.medium.com/10-tricky-things-in-javascript-1ce760c5fc33
https://hidaytrahman.medium.com/9-array-methods-every-javascript-developer-should-know-104d21ae7b8
https://medium.com/@jitendradprajapati/mistakes-i-have-made-as-a-js-noob-developer-bb58d89a3e75
*/
