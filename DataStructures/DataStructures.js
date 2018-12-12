// Data Structures //

// INTRODUCTION //

// Data strcutures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

// Holds data, stores the data in a particular pattern, and has their OWN methods.

// Why are there so many data structures?

// Some data structures are really specifialized while others, like arrays, are more generally used
// They all do different things
// Usage is important

// Basically ways of storing data, based on some kind of relationship.

// Why is it important?
// Datastructures are VERY important in real life applications, using an array for every single type of data may not be the best.
// Trees are used in DOM manipulation for example.

// There is NO best data structure, all excel in different situations

// For example you might want to use a graph data structure if you're trying to build something like google maps
// Would be very difficult to do so using arrays

// Need an ordered list with fast inserts/removals at the beginning and the end?
// Use a linked list!

// Need to web scrape nested HTML
// Use a tree!

// Task scheduler aka choose which tasks to prioritize
// Use a binary heap!
////////////////////////////////////////////////////

// ES2016 Class Syntax Overview //

// Javascript doesn't come with any of the datastructures we will implement, we will therefore use the class keyword to create datastructures.

// What is a class?
// A class is a blueprint for creating objects with pre-defined properties and methods.
// We can then use this blueprint to create instances of that class as new objects.
// Javascript does not really have classes, class syntax in ES6 is entirely based on prototypal-inheritance

// The Syntax
class Student {
  constructor(firstName, lastName) {
    // Inside the constructor we place properties of the class, when we create new student in the future, we pass in firstName and lastName into our class
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// Instantiating new classes
let firstStudent = new Student("Colt", "Steele"); // Our input matches our constructor properties
// firstStudent.firstName = "Colt";

// In this situation where this is inside an instance method such as a constructor method, this refers to the current instance of the class object. For example, this of firstStudent refers directly to the firstStudent object created by class.

// Defining methods in our classes //
// Instance Methods //
// Instance Methods are methods that provide functionality that pertains directly to our current instance, for example:
// The data.push() method is a instance method that mutates the array instance that calls push.
// Another example:
class Student {
  constructor(firstName, lastName) {
    // Inside the constructor we place properties of the class, when we create new student in the future, we pass in firstName and lastName into our class
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your fullname is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  // Instance method with an input
  // Called by firstStudent.addScore(86)
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return "Enrolling Students";
  }
  // EnrollStudents CANNOT be called by instances of Student, it is completely irrelevant for the instances. It can only be called by the class itself via Student.EnrollStudents();
}
// The method returns a different value for each different instance of Student. These methods work on individual instances of the class!

// Array.pop(), has to pop from ONE instance of an array

// In our example firstStudent.markLate() acts on the instance of student called firstStudent and modifies its individual properties! It is an Instance Method!

// Class Methods
// You define a class method by declaring the method with the keyword static in front of it. Static methods are methods for the class but not necessarily for just the instances of the class.
// These methods are very uncommon, They cannot be called by a class instance. It is more like a utility function, you do not used data from the instance.

// Look above for example

// Example 2
// From MDN
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.y;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
Point.distance(p1, p2);
// distance cannot be called by p1 or p2, Point in a way does things with the instances it created with its static methods. The instances itself do not necessarily need the method. We see these for old methods like Math.floor() which rounds an number passed into it

// Inside all of our instance methods and constructor, the keyword "this" refers to the object created from that class (also known as an instance of the class)
