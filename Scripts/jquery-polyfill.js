/**
 * Created by schandramouli on 2/5/16.
 */

function $(element) {
  if (!document.querySelectorAll) {
    return document.querySelectorAll(element);
  } else {
    // means theres no builtin support for
    // querySelector engine
    // first, we need to check if its an id
    if (element.charAt(0) === '#') {
      // we found an id
      // console.log(element.slice(1));
      return document.getElementById(element.slice(1));
    } else if (element.charAt(0) === '.') {
      // means we got a class
      return document.getElementsByClassName(element.slice(1));
    } else {
      // its probably a tag, we are not looking at complex selectors
      return document.getElementsByTagName(element);
    }
  }
}

window.addEventListener("load", function() {
  //alert("hi");
  console.log("hello");
  console.log($("#sai"));
});
