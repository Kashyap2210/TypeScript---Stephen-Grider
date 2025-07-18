const profile = {
  name: "Tony",
  age: 60,
  superPower: {
    one: "genius",
    two: "rich",
  },
};

// this is how we destructure a property from the object and annotate it
const { age }: { age: number } = profile;

// now if we want nested then what we do is that
const {
  superPower: { one, two },
}: { superPower: { one: string; two: string } } = profile;

// Its better to use interfaces

interface SuperPower {
  one: string;
  two: string;
}

interface Profile {
  name: string;
  age: number;
  superPower: SuperPower;
}

const {
  superPower,
  name: destructuredName, // to sole error of cannot re-declare block scope variable
}: { name: string; superPower: SuperPower } = profile;
