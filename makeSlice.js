let str = "this is my string"

Object.defineProperty(String.prototype, 'mySlice', {
  value: function (startIndex, endIndex) {
    let stringLength = endIndex - startIndex;
    return this.substr(startIndex, stringLength);
  }
})

console.log(str.mySlice(0, 3));