import * as Object from './Object.js';

console.info('----------1. Is object ----------');
const premierLeagueClub = { name: 'Chelsea', points: 7 };
console.log(Object.isObject(premierLeagueClub)); // Returns true

console.info('----------2. Compare objects ----------');
const premierLeagueClubB = { name: 'Arsenal', points: 7 };
const premierLeagueClubC = { name: 'City', points: 7 };
console.log(Object.compareObjects(premierLeagueClubB, premierLeagueClubC)); // Returns false
