const calculation = require('./script');

test('Calculating the value of X hours and Y policies when AMS is used', () => {
    expect(calculation.withAMS(8,2)).toStrictEqual([9,2]);
  });

test('Calculating the value of X hours and Y policies when AMS is not used', () => {
    expect(calculation.withoutAMS(8,2)).toStrictEqual([18,4]);
  });

test('Calculating the value of X hours and Y policies when AMS is not used', () => {
    expect(calculation.withoutAMS(19,1)).toStrictEqual([39,9]);
  });

test('Calculating the value of X hours and Y policies when AMS is not used', () => {
    expect(calculation.withAMS(19,1)).toStrictEqual([19.5,5]);
  });
