// Write a program that can print the song "99 Bottles of Beer".

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

function song() {
  let bottlesNum = 99;

  while(bottlesNum != 0) {
    console.log(bottlesNum + " bottles of beer on the wall " + bottlesNum + " bottles of beer");
    bottlesNum --;
    if(bottlesNum < 1) {
      console.log("Take one down pass it around, no more bottles of beer on the wall");
      console.log("No more bottles of beer on the wall, no more bottles of beer.");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else {
      console.log("Take one down, pass it around " + bottlesNum + " bottles of beer on the wall");
    }
  }
}
song();