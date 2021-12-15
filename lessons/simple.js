const {sum, substract} = require("../math");

let result, expected;


test('sum adds numbers', () => {
    result = substract(4,6);
    expected = -2;
    expect(result).toBe(expected);
});
 
 function test(title, callback) {
    try {
        callback();
        console.log(`✓ ${title}`)
    } catch (error) {
        console.error(`x ${title}`);
        console.error(error);
    }
 }


function expect(actual) {
    return {
        toBe(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}