"use strict";

function degree(x, n) {
    let result = x ** n;
  
    return result;
  }
  
  let x = prompt("Write here some number which you wanna up to some degree");
  let n = prompt("Number of degree");
  
  if (n.includes('.')) {
    alert(`Degree ${n} isn't supported, use natural number`);
  } else {
    alert( degree(x, n) );
  }