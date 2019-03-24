class Info {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Info {
  constructor(name, buildYear, numberOfTrees, parkArea) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.parkArea = parkArea;
  }

  treeDensity() {
    const density = Math.round(this.numberOfTrees / this.parkArea);
    console.log(`${this.name} has a tree density of ${density} trees per square km.`)
  }
}

class Street extends Info {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}

const allParks = [
  new Park('Central Park', 1857, 4950, 3.410),
  new Park('City Hall Park', 1766, 235, 0.5),
  new Park('Bryant Park', 1843, 450, 0.4)
];

const allStreets = [
  new Street('Lexington Avenue', 1832, 9.3, 3),
  new Street('Broadway', 1776, 53, 5),
  new Street('Park Avenue', 1811, 17.5, 4),
  new Street('Madison Avenue', 1836, 9.7)
];

function reportPark(parks) {
  console.log('\n----PARKS REPORT----');
  
  // Density
  parks.forEach(element => {
    element.treeDensity();
  });
  
  // Average age
  let ages = 0;

  parks.forEach(element => {
    ages = ages + (new Date().getFullYear() - element.buildYear);
  });

  console.log(`Our ${parks.length} parks have an average of ${ages / parks.length} years.`);

  // Which park has more than 1000 trees
  const  moreThanHundred = parks.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
  console.log(`${parks[moreThanHundred].name} has more than 1000 trees.`);
}

function reportStreets(streets) {
  let totalLength, averageLength;

  console.log('\n----STREETS REPORT----');
  totalLength = 0;
  
  // Total length
  streets.forEach(element => {
    totalLength += element.length;
  });

  // Average length
  averageLength = totalLength / streets.length;
  console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${averageLength} km.`);

  // Size classification
  streets.forEach(element => {
    element.classifyStreet();
  });
}

reportPark(allParks);
reportStreets(allStreets);