
// document.currentScript polyfill by Adam Miller

// MIT license

function createCookie(name, value, days) {
  var expires = "",
      date = new Date();
  if (days) {
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=",
      ca = document.cookie.split(';'),
      i = 0;
  for (i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
if (readCookie('tlh_referrer') === null) {
  createCookie('tlh_referrer', document.referrer, 1);
}
if (readCookie('tlh_qry_string') === null) {
  createCookie('tlh_qry_string', window.location.search.substring(1), 1);
}

console.log('Test message from form-analytics! Should be version .27');
