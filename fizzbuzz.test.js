const fizzbuzz = require('./fizzbuzz')
test('FizzBuzz for multiples of 3', () => { expect(fizzbuzz(3)).toContain('Fizz'); })