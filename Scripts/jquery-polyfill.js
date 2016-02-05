/**
 * Created by schandramouli on 2/5/16.
 */

function $(element) {
  if (document.querySelectorAll) {
    return document.querySelectorAll(element);
  } else {
    // means theres no builtin support for
    // querySelector engine
  }
}