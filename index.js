var express = require('express');

var money = "dolla dolla bills";

for (i = 0; i < 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (i % 3 === 0) {
    console.log(i);
  } else {
    console.log("not divisible by 3 or 5");
  }
}

console.log(money);

app.listen(3000);
