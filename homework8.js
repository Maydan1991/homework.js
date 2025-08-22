"use strict";

var arr = [
  { email:"testtest@gmail.com" },
  { email:"dmitro@yahoo.com" },
  { email:"andrii@mail.ru" }
];

var re = /^[a-z0-9]+@(gmail|yahoo)\.com$/i;

for (var i = 0; i < arr.length; i++) {
  if (re.test(arr[i].email)) {
    console.log(arr[i].email);
  }
}
    