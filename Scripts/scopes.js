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

// declaring and masking

function changeLocalColor() {
  var color = "yellow"; // masks global color
  color = "pink"; // overwrites local var, not global
  return color;
}

console.log(changeLocalColor());
console.log(color);

function changeGlobalColor() {
  color = "pink"; // overwrites global var
  // same as window.color = "pink";
  return color;
}

console.log(changeGlobalColor());
console.log(color);
