// on first try

function fizzBuzz() {
  const start = 1;
  const end = 100;
  let array = [];

  for (let num = start; num <= end; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      array.push("Fizz Buzz");
    } else if (num % 3 === 0) {
      array.push("Fizz");
    } else if (num % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(num);
    }
  }
  return array;
}

fizzBuzz();
