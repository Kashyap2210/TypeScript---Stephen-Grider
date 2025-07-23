// CLASSES

/* 

- Classes is a blueprint of sorts to create an object with some fields(values) & methods(functions) to represent a 'THING'
- That thing can be an entity class, service class, etc. 
- Always capitalize the name of the class
*/

export class Vehicle {
  drive(): void {
    console.log("this is the drive method");
    // this is a normal method
    // to call this method we need a new instance of the class
  }

  private honk(): void {
    console.log("this is the honk method");
  }
}

export class Car extends Vehicle {
  // car can be a vehicle in real life
  // so whatever a car can do a vehicle should be able to do
  // so to do that we can either extends class Car to class Vehicle, or else we will have to copy all the methods from Vehicle into Class
  // what extends does is that it add the methods from Vehicle to Car
  // so we can do car.drive() as well as vehicle.drive()
  // we can also override the method from Vehicle in the Car class
  private drive() {
    console.log("Vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }

  /* 
  
  - In this case Vehicle is the super class or parent class
  
  */
}

const car = new Car();
// car.drive(); <-- whenever studying this file uncomment this
car.honk();

car.startDrivingProcess();

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

// MODIFIERS

/* 

- Modifiers are something that we add on the methods of the classes to manipulate their behaviour
- There are 3 main type of modifiers
    - public
        - Methods annotated with this can be called anywhere, anytime
        - If no modifier is add then by default its a public method
    - private
        - This method can only be called by oter methods in "this" class
        - When we have a super sensitive method that we need to call in a special way to work, and we dont want other developers to call that method we mark that method as private
    - protected
        - This method can be called by other methods in "this" class, or by other methods in child classes. Child classes means the classes that extends in the class where metod is defined 

*/

/* 

- Lets mark "drive" method as private, as soon as we do that now we get error wherever we call car.drive()
- This error happens because we marked the drive method as private and private methods can only be called inside the class where they have been declared
- Now lets make a method called startDrivingProcess which calls the drive method and then everything works
*/

console.log(car.startDrivingProcess());

/* 

- But when we look closely we get an error on Car, below is the exact error:
    Class 'Car' incorrectly extends base class 'Vehicle'.
        Property 'drive' is private in type 'Car' but not in type 'Vehicle'.ts(2415)
    class Car
    No quick fixes available
- The above error happens because, in TS we cannot change the modifier of an inherited method when we override it in the child class

*/

/* 

- Now lets mark the honk method in Vehicle class as private & then when we call that method in the Car class's startDrivingProcess() we get an error stating that honk is a private method and can only be called in the class where its defined.
- To solve this issue what we can do is that make honk method as protected so that it can be called in the same class as well as in the child class of then class where it is defined, but that method cant be called outside that method 

*/
