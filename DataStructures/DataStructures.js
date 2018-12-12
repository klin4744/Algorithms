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
