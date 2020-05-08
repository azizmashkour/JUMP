export const detectWalk = array => {
  if (!Array.isArray(array)) {
    throw 'Input is not an array';
  }
  const hasIntegers = array.some(i => {
    return isNaN(i);
  });

  if (hasIntegers) {
    throw 'Input does not contain all integers';
  }

  if (array.length < 3) {
    throw 'Input needs to contain three or more comma delimited values';
  }
  var result = [];

  return result;
};

export function calculateResult(input) {
  const parsedInput = input.split(',').map(i => parseInt(i.trim(), 10));
  let error = null;
  let result = '';
  try {
    result = detectWalk(parsedInput);
  } catch (e) {
    error = e;
  }
  return { input: parsedInput, result, error };
}
