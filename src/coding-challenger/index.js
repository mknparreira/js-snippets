console.info(
  "----------1. Count the frequent word in given array or Find the frequency of elements in array ----------"
);

const words = ["hello", "world", "java", "hello", "java"];

const countWord = (word) => {
  const count = {};
  word.forEach((item) => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });
  return count;
};

console.log(countWord(words)); // Returns { hello: 2, world: 1, java: 2 }

console.info(
  "----------2. Perform Grouping on the basis of age of given array of object ----------"
);

const people = [
  { name: "Alice", age: 32 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const groupBy = (arr) => {
  let check = {};
  arr.forEach((item) => {
    if (!check[item.age]) {
      check[item.age] = [item];
    } else {
      check[item.age].push(item);
    }
  });
  return check;
};

console.log(groupBy(people));

/* {
  '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
  '32': [ { name: 'Alice', age: 32 } ]
} */
