// Rest Parameters

// ES5
function isFullAge5(limit) {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log((2019 - cur) >= limit);
  });
}

isFullAge5(21, 1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
  // console.log(years);
  years.forEach(cur => console.log((2019 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);