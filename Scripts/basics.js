/**
 * Created by schandramouli on 2/3/16.
 */

// basic types
var i = 10;
console.log(i, typeof i);
var j = "Hello";
console.log(j, typeof j);
var bool = true;
console.log(bool, typeof bool);
var array = ["a", "b"];
var array2 = new Array("a", "b", "c"); // never use this
console.log(array);
console.log(array2);
//
//
//
//// SURPRISE!!!
console.log(typeof array, typeof array2);
//
//
//
//// basic operators
var x = 6 + 7;
console.log(x);
var y = 13 - 5;
console.log(y);
var z = (x / y) + (x * y);
console.log(z);
var str = "world" + 12 + 1;
console.log(str);
//
//// bitwise --> DO NOT USE THESE, THEY ARE SLOW
var a = 6 ^ 7;
console.log(a);
var b = ~ 5;
console.log(b);
var c = (b & a) + (b | a);
console.log(c);

