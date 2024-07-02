const makeOutput = require('./fizzbuzz')
test('FizzBuzz for 1', () => { expect(makeOutput(1)).toBe(1); })
test('FizzBuzz for 3', () => { expect(makeOutput(3)).toBe('Fizz'); })
test('FizzBuzz for 5', () => { expect(makeOutput(5)).toBe('Buzz'); })
test('FizzBuzz for 7', () => { expect(makeOutput(7)).toBe('Bang'); })
test('FizzBuzz for 11', () => { expect(makeOutput(11)).toBe('Bong'); })
test('FizzBuzz for 13', () => { expect(makeOutput(13)).toBe('Fezz'); })
test('FizzBuzz for 15', () => { expect(makeOutput(15)).toBe('FizzBuzz'); })
test('FizzBuzz for 17', () => { expect(makeOutput(17)).toBe(17); })
test('FizzBuzz for 19', () => { expect(makeOutput(19)).toBe(19); })
