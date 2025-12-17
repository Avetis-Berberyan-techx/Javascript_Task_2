//JavaScript Utilities Library
console.log('===============utilities library================');
const Utilities = {
  factorial: function (number) {
    if (number < 0) return 'Invalid input';
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  },

  reverseString: function (str) {
    return str.split('').reverse().join('');
  },

  isPrime: (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  },

  maxInArray: function (arr) {
    if (!arr.length) return undefined;
    let max = arr[0];
    for (let num of arr) {
      if (num > max) max = num;
    }
    return max;
  },

  capitalizeWords: function (sentence) {
    return sentence
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },

  removeDuplicates: (arr) => [...new Set(arr)]
};

// Test calls
console.log('factorial of 5: ', Utilities.factorial(5));
console.log('JavaScript reverse', Utilities.reverseString('JavaScript'));
console.log('17 is prime: ', Utilities.isPrime(17));
console.log('18 is not prime: ', Utilities.isPrime(18));
console.log(
  'Maximum number of [3, 7, 2, 9, 4] : ',
  Utilities.maxInArray([3, 7, 2, 9, 4])
);
console.log(
  'capitalize words: ' + Utilities.capitalizeWords('hello world from js')
);
console.log(
  'remove duplicates: ' + Utilities.removeDuplicates([1, 2, 2, 3, 4, 4, 5])
);

//  Scope Simulation & Analysis

console.log('===============Scope Simulation================');
console.log('===========function with if block===========');

//function with if block

let globalVar1 = 'Global variable outside the function';

function func1(a) {
  var varVar1 = 'var variable of function block';
  if (a % 2 === 0) {
    let letVar1 = 'let variable of if block';
    const constVar1 = 'const variable of if block';
    console.log(`${globalVar1} in function if block`);
    console.log(`${letVar1} in function if block`);
    console.log(`${constVar1} in function if block`);
  }
  console.log(`${globalVar1} in function block`);
  // console.log(`${letVar1} in function block`); //Reference Error because it has only access in if block
  // console.log(`${constVar1} in function block`); //Reference Error because it has only access in if block
}

func1(2);
// console.log(`${varVar1} outside the function`);//Reference Error because it has only access in func1 and its blocks

//Nested function
console.log('=========function with Nested function block===========');

let globalVar2 = 'Global variable outside the function';

function func2() {
  var varVar2 = 'var variable of function block';
  function nestedFunction() {
    let letVar2 = 'let variable of nested function block';
    const constVar2 = 'const variable of nested function block';
    console.log(`${globalVar2} in nested function block`);
    console.log(`${letVar2} in nested function block`);
    console.log(`${constVar2} in nested function block`);
  }
  nestedFunction();
  console.log(`${globalVar2} in function block`);
  //console.log(`${letVar2} in function block`);//Reference Error because it has only access in nested function block
  // console.log(`${constVar2} in function block`);//Reference Error because it has only access in nested function block
}

func2();
// console.log(`${varVar2} outside the function`); //Reference Error

// Hoisting & TDZ Debugger

//Variables Hoisting
console.log('=========Variable hoisting===========');

console.log(varVar3); //undefined
// console.log(letVar3); //Reference Error
// console.log(constVar3);//Reference Error

var varVar3 = 'var variable';
let letVar3 = 'let variable';
const constVar3 = 'const variable';

//Function Hoisting
console.log('=====================function hoisting========================');
console.log('=========Normal function===========');
//Normal functions
func3();

function func3() {
  console.log('Hello World');
}
//Arrow functions

// varFunc(); //type Error
console.log(varFunc);

// letFunc(); //Reference Error
// console.log(letFunc);//Reference Error
// constFunc(); //Reference Error
// console.log(constFunc());//Reference Error
var varFunc = () => {
  console.log('var Arrow function');
};

let letFunc = () => {
  console.log('let Arrow function');
};

const constFunc = () => {
  console.log('const Arrow function');
};
