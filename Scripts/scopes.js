/**
 * Created by schandramouli on 5/24/16.
 */

var color = "blue";
var tempColor;
var anotherColor;
function outer() {
  tempColor = "red";
  function inner() {
    anotherColor = "green";
    console.log("inner", color, tempColor, anotherColor);
  }
  console.log("outer", color, tempColor, anotherColor);
  inner();
}

console.log("global", color, tempColor, anotherColor);

outer();
