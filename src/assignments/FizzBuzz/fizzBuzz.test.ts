import { FizzBuzz } from './FizzBuzz';

describe('FizzBuzz', () => {
  it('should show "fizz" when input = 3', () => {
    // todo: arrange
    const expectedResult = 'Fizz';

    // todo: action
    const actualResult = FizzBuzz(3);

    expect(actualResult).toEqual(expectedResult);
  });

  it('should show input when input', () => {
    const actualResult = FizzBuzz(7);
    const expectedResult = '7';

    expect(actualResult).toEqual(expectedResult);
  });

  // it('should say input', () => {
  //   // todo: arrange
  //   const input = 1;
  //   const expectedResult = '1';
  //   // todo: assert
  //   expect(FizzBuzz(input)).toEqual(expectedResult);
  // });
  it('should say Fizz', () => {
    // todo: assert
    expect(FizzBuzz(3)).toEqual('Fizz');
    expect(FizzBuzz(6)).toEqual('Fizz');
    expect(FizzBuzz(9)).toEqual('Fizz');
    expect(FizzBuzz(12)).toEqual('Fizz');
  });
  it('should say Buzz', () => {
    // todo: assert
    expect(FizzBuzz(10)).toEqual('Buzz');
    expect(FizzBuzz(5)).toEqual('Buzz');
    expect(FizzBuzz(100)).toEqual('Buzz');
  });
  it('should say FizzBuzz', () => {
    // todo: assert
    expect(FizzBuzz(15)).toEqual('FizzBuzz');
    expect(FizzBuzz(30)).toEqual('FizzBuzz');
    expect(FizzBuzz(450)).toEqual('FizzBuzz');
  });
  test.each([
    { num: 3, expected: 'Fizz' },
    { num: 6, expected: 'Fizz' },
    { num: 9, expected: 'Fizz' },
    { num: 12, expected: 'Fizz' },
  ])(
    'should say $num when given $expected($num, $expected)',
    ({ num, expected }) => {
      expect(FizzBuzz(num)).toBe(expected);
    }
  );
});
