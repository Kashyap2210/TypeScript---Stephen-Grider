// INTERFACES

/* 

- The interplay between INTERFACES & CLASSES is what helps us to get really strong code reuse.
- Create a new type inside our app. In that type we describe all the property names and the type of value that will be present for that key.
- These help us remove the long type annotations in our code. 

*/

interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;

  // we can add any type as the type of values inside the function

  // We can also express functions inside the interfaces
  summary(): string;

  // Even if an object has extra properties other than summary & also has summary then also that object is said to satisfy the Vehicle Type
}

// let oldCivic = {
let oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehicleDetails = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
// const printVehicleDetails = (vehicle: Vehicle): void => {
const printSummary = (item: Reportable): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken? : ${vehicle.broken}`);
  console.log(item.summary());
};

// So by adding interface what we essentially say is that we need to pass an object that satisfies the interface Vehicle

printSummary(oldCivic);

const beverage: Reportable = {
  //   @ts-ignore
  color: "brown",
  carbonated: true,
  sugar: 40,
  //   summary(): string {
  //     // @ts-ignore
  //     return `My drink has ${this.sugar} grams of sugar.`;
  //   },
};

printSummary(beverage); // See since beverage has a property called summary its okay and is accepted in the printSummary function and doesnt give error. This is called Structural Typing

/* 

--> General Strategy For Reusable Code in TS
- Create functions that accept arguments that are typed with the interfaces.
- Objects/ classes can decide to 'implement' a given interface to work with a function

*/
