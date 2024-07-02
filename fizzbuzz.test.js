const makeOutput = require('./fizzbuzz')
test.only('FizzBuzz for 1', () => { expect(makeOutput(1)).toBe(1); })
test.only('FizzBuzz for 2', () => { expect(makeOutput(2)).toBe(2); })
test.only('FizzBuzz for 3', () => { expect(makeOutput(3)).toBe('Fizz'); })
test.only('FizzBuzz for 5', () => { expect(makeOutput(5)).toBe('Buzz'); })
test.only('FizzBuzz for 7', () => { expect(makeOutput(7)).toBe('Bang'); })
test.only('FizzBuzz for 11', () => { expect(makeOutput(11)).toBe('Bong'); })
test.only('FizzBuzz for 13', () => { expect(makeOutput(13)).toBe('Fezz'); })
test.only('FizzBuzz for 15', () => { expect(makeOutput(15)).toBe('FizzBuzz'); })
test.only('FizzBuzz for 17', () => { expect(makeOutput(17)).toBe(17); })
test.only('FizzBuzz for 19', () => { expect(makeOutput(19)).toBe(19); })
test.only('FizzBuzz for 21', () => { expect(makeOutput(21)).toBe('FizzBang'); })
test.only('FizzBuzz for 33', () => { expect(makeOutput(33)).toBe('Bong'); })
test.only('FizzBuzz for 65', () => { expect(makeOutput(65)).toBe('FezzBuzz'); })
test.only('FizzBuzz for 195', () => { expect(makeOutput(195)).toBe('FizzFezzBuzz'); })
test.only('FizzBuzz for 143', () => { expect(makeOutput(143)).toBe('FezzBong'); })
test.only('FizzBuzz for 255', () => { expect(makeOutput(255)).toBe('BuzzFizz'); })
test.only('FizzBuzz for 255255', () => { expect(makeOutput(255255)).toBe('BongFezz'); })
test.only('FizzBuzz for 1365', () => { expect(makeOutput(1365)).toBe('FizzFezzBuzzBang'); })
test.only('FizzBuzz for 23205', () => { expect(makeOutput(23205)).toBe('BangBuzzFezzFizz'); })

// not working
// test.only('FizzBuzz for 23205', () => { 
//     return makeOutput(23205).then(data => {
//         expect(data.toBe('BangBuzzFezzFizz'));
//     });
// })