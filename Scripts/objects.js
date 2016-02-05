/**
 * Created by schandramouli on 2/4/16.
 */

// basic objects

var obj = {};
console.log(typeof obj);

// This IS JSON :D
var complexObj = {
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
};

console.log(typeof complexObj);

var complexObj2 = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};

// Accessing object properties
console.log(complexObj2.key1);
console.log(complexObj.key1);

// Also,
console.log(complexObj2["key1"]);

// But not this:
// console.log(complexObj2[key1]);


// More complex objects, that look like classes
classLikeObject = {
  "attr1": "Value1",
  attr2: this,
  method1 : function() {
    // this is once again what you are not used to
    console.log("I am a method of this class", this)
  }
};

classLikeObject.method1();
console.log(classLikeObject.attr2);
console.log(this === classLikeObject.attr2);