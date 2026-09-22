function getFirst<T>(array: T[]): T | undefined {
  return array[0];
}

type Dog = {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
    race: string;
    age: number;
};

const dogs: Dog[] = [
  {
    name: "Canelo",
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: "chucho",
    age: 3,
  },
  {
    name: "Max",
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: "labrador",
    age: 5,
  }
];

const firstDog = getFirst(dogs); 

const firstName = getFirst(["a", "b"]); 

const emptyTest = getFirst([]);


type DogPreview = Pick<Dog, "name" | "race">;

const newDog: DogPreview = {
    name: "Rocky",
    race: "chucho",
};

type DogWithoutAge = Omit<Dog, "age">;

const dogWithoutAge: DogWithoutAge = {
    name: "Buddy",
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: "husky",
};

type FrozenDog = Readonly<Dog>;

const frozenDog: FrozenDog = {
    name: "Charlie",
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: "labrador",
    age: 4,
};


frozenDog.age = 5;
console.log(frozenDog);


function updateDog(dog: Dog, updates: Partial<Dog>): Dog {
    return { ...dog, ...updates };
}


const updatedDog = updateDog(dogs[0], { age: 4 });
console.log(updatedDog);


export {};