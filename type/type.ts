// What is a type
// Type is an easy way to refer to the different properties & functions that a value has

// What is a value?
// anything that we can assign to a variable

// What can we assign to a variable
// string, number, boolean, functions, objects, classes, arrays
// all the above values have types

// so when we assign a type to a value in a variable then that variable has all the methods of that type.
// When we refer to the type of a variable then we refer to all the methods that that value has.
// So a variable with string type has all the methods of string, variable with type array has all the methods of that array

// So basically types in typescript are shortcuts/ labels for describing different method and shortcuts that a value or variable has

// There are 2 main type of types
// i  - Primitive Types - number, boolean, void, undefined, string, symbol, null
// ii - Object Types - functions, arrays, classes, objects
// We can write a code that tricks TS into believing that its a valid type, we do this for good. So we can wrtie good code.

// Why do we care about types??
// - Types are used by the TS Compiler to analyze our code for errors.
// - Types allow other engineers to understand what values are flowing around our codebase

// Where do we use types? --> Everywhere!

const today = new Date();

today.getDate();

const person = {
  age: 20,
};

class Color {}
const red = new Color();
