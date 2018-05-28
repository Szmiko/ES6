const average = (...numbers) => (...numbers.reduce((a, b) => a + b, 0) / numbers.length);

const average1 = average(2, 1, 4);
console.log(average1);