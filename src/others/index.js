import * as Console from './Console.js';
import * as Number from './Number.js';

console.info('----------1. Is it a number? ----------');
console.log(Number.isNumber(1.5)); // Returns true

console.info('----------2. Average value ----------');
console.log(Number.averageNum(55, 8, 37, 4)); // Returns false

console.info('----------3. Shorthand object prperty assignment ----------');
Console.displayValuesAsObject('Maikon Parreira', 'mknparreira@gmail.com', true);
/*
{
  name: 'Maikon Parreira',
  email: 'mknparreira@gmail.com',
  active: true
}
*/
