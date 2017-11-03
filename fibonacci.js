
// keep practicing.

function fibonnaci(index) {
  let fibArray = [1, 1];

  while (!fibArray[index]) {
    fibArray.push(
      fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]
    );
  }
  console.log("index " + fibArray[index]);
}

fibonnaci(5);
