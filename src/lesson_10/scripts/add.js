export const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('Provided not a number');
  }
  return a + b; 
};
