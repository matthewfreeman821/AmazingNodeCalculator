// console.log('Hello Node! Can we be friends?');

// const add = (num1, num2) => {
//     return num1 + num2
// };

const add = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mult = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

const squ = (num1) => num1 * num1;

const roo = (num1) => Math.sqrt(num1);

// const arithmetic = {
//     add: add,
//     sub: sub
// }

const arithmetic = {//can do it this way because key and value are the exact same
    add,
    sub,
    mult,
    div,
    squ,
    roo
};

module.exports = arithmetic;