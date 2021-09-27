// You can easily remove duplicates with Set in JavaScript. Its a life saver.
// const arrayDuplicated = [1, 2, 3, 4, 4, 5, 5, 6];
// console.log(removeDuplicates(arrayDuplicated));
// Result: [ 1, 2, 3, 4, 5, 6 ];
export const removeDuplicates = (arr) => [...new Set(arr)];
export const isValueInArray = (value, arr) => arr.includes(value);
