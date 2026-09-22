interface Named {
  name: string;
}

interface LivingNeeds {
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

type DogRace = "husky" | "labrador" | "chucho";

interface Bird extends Named, LivingNeeds {
  canFly: boolean;
}

interface Dog extends Named, LivingNeeds {
  race: DogRace;
  age: number;
}

interface Cat extends Named {
  color: string;
  canSleep: boolean;
}

type Snake = LivingNeeds;


const parrot: Bird = {
  name: "Parrot",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  name: "canelo",
  canEat: true,
  canDrink: true,
  canSleep: true,
  race: "chucho",
  age: 3,
};

const cat: Cat = {
  name: "Michi",
  color: "orange",
  canSleep: true,
};

const snake: Snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};

export {};