/* 
setTimeout - runs function once after specific time

- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object
*/

function sayHello(){
 console.log('hello sumit');
}

setTimeout(sayHello,1000);

// will not work 

// setTimeout(sayHello(),1000);

// alternative approach, ES6 arrow function

// setTimeout(function(){
//  console.log('hello sumit');
// }, 2000);

function showScore(name,score){
 console.log(`hello ${name},your score is ${score}`);
}

// setTimeout(showScore,1000, 'sumit',34);

const firstID = setTimeout(showScore,1000, 'sumit',34);
const secondID = setTimeout(showScore,1000, 'shalini',88);
console.log(firstID);
console.log(secondID);
clearTimeout(firstID);

