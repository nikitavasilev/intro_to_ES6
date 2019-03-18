// Blocks and IIFEs

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b); // error because of block scope
console.log(c); // work beacause they are function scoped

// ES5
(function() {
  
  var c = 3;
})();

// console.log(c); // same as above