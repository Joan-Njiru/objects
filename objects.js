//Given an array of objects, each object representing a person with a name and age property, 
//write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

 function adult (people){
      let teen = []
      for (let i = 0; i < people.length; i++) {
          if(people[i].age >= 18){
              teen.push(people[i].name)
          }
      }
      return teen
  }
  const x = adult(people)
  console.log(x);

//Write a function that takes an array of objects, where each object represents a product with a name, 
//price, and category property. The function should return an object that groups the products by their 
//categories, with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
function categories(products) {
  const separated = {};
  products.forEach(function(product) {
    if (separated[product.category]) {
      separated[product.category].push(product);
    } else {
      separated[product.category] = [product];
    }
  });
  return separated;
}
console.log(categories(products));


//Given an array of objects, where each object represents a student with a name and an array of scores,
// write a function that returns a new array containing the names of all students whose average score 
//is greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
function averageStudents(students, score) {
  const result = [];
  for (const student of students) {
    const averageScore = student.scores.reduce((a, b) => a + b) / student.scores.length;
    if (averageScore >= score) {
      result.push(student.name);
    }
  }
  return result;
}
const result = averageStudents(students, 85);
console.log(result);

// Given an object representing a car, with properties for the make, model, year,
// and a method to display the car's information, write a function that takes the 
//car object and adds a new method to the object called age. The age method should 
//return the current age of the car based on the current year and the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};

const carAge = function(obj) {
  obj.age = function() {
     return fullyear - car.year
  }
}
carAge(car)
const date = new Date()
const fullyear = date.getFullYear()
console.log(car.age())
console.log(car)


