let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Object.defineProperty(Object.prototype, 'myReduce', {
  value: function(func, initialValue) {
    
    let acc = initialValue;
    
    for (let i = 0; i < this.length; i++) {
      
      console.log('acc', acc);
      acc = func(acc, this[i]);
      
    }
    return acc
  }
})


let reduced = array.myReduce((acc, value) => { 
  return acc + value
}, 0)

console.log('reduced', reduced);

let reduced2 = array.reduce((acc, value) => {
  return acc + value
},0)

// console.log('reduced2', reduced2);
