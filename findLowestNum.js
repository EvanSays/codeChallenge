// find the lowest num and return the next num, instead

const array = [0,16,1,3,22,2];

function lowestNum(array) {
  let low = array[0];
  let index = 0;

  for(let i = 0; i < array.length; i++){
    if(array[i] < low){
      low = array[i];
      index = i;
    }
  }
  if(index === array.length - 1) {
    return array[index]
  } else {
    return array[index + 1]
  }
}

console.log(lowestNum(array));