const assert = require('assert');

// const maths = require('../index');
// const add = maths.add;
// const sub = maths.sub;

//Declare the add and sub variables and assign them in one step
const {add, sub, mult, div, squ, roo} = require('../index');//"object destructuring"


describe('Adding numbers', () => {
    describe('simple addition', () => {
        it('shouldreturn 2 when the values are 1 and 1', () => {
            assert.equal(add(1, 1), 2);
        })
    });
    describe('adding decimal numbers', () => {
        it('should equal ..... to 5 decimal places', () => {
            assert.equal(10.0 + 10.0, 20.0);
        });
    });
});

describe('Subtracting numbers', () => {
    describe('simple subtraction', () => {
        it('should equal 0 when subtracting 1 and 1', () => {
            assert.equal(sub(1, 1), 0);
        });
    });
});

describe('Multiplying numbers', () => {
    describe('simple multiplication', () => {
        it('should return 4 when the values are 2 and 2', () => {
            assert.equal(mult(2, 2), 4);
        });
    });
});

describe('Division of numbers', () => {
    describe('simple division', () => {
        it('should return 1 when the values are 2 and 2', () => {
            assert.equal(div(2, 2), 1);
        });
    });
});

describe('Squaring numbers', () => {
    describe('simple squaring of a number', () => {
        it('should return 4 when the value is 2', () => {
            assert.equal(squ(2), 4)
        });
    });
});

describe('Finding square root of numbers', () => {
    describe('square root', () => {
        it('should return 2 when the value is 4', () => {
            assert.equal(roo(4), 2)
        });
    });
});

