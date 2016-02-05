/**
 * Created by schandramouli on 2/4/16.
 */

// regular function
function add(x, y) {
  return x + y;
}

console.log(add(3, 5));

// function expression
var x = function y() {
  return 8;
};
console.log(x);
console.log(x());

// function literal
var fLiteral = function() {
  return 11;
};
console.log(fLiteral);
console.log(fLiteral());



// LEXICAL SCOPING
//function closure() {
//  // emulate private variables
//  var x = 1;
//  return function() {
//    return x++;
//  }
//}
//
//c = closure();
//console.log(c());
//console.log(c());
//console.log(c());
//console.log(c());

// Advanced closures