/**
 * Created by schandramouli on 2/5/16.
 */

function ajax(url, method, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", callback);
  xhr.open(method, url);
  xhr.send();
}

function oldAjax(url, method, callback) {
  var xhr = new XMLHttpRequest();
  function stateChange() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr);
    }
  }
  xhr.onreadystatechange = stateChange;
  xhr.open(method, url);
  xhr.send();
}