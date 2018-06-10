const array = [1, 4, 'Iwona', false, 'Nowak'];

const [first, second,  , third, ...rest] = array;
console.log(rest);