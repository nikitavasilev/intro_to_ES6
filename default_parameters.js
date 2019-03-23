// Default Parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName;
  nationality === undefined ? nationality = 'american' : nationality;
  
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

const james = new SmithPerson('James', 1994);
const jennifer = new SmithPerson('Jennifer', 1983, 'Aniston');
console.log(james, jennifer);