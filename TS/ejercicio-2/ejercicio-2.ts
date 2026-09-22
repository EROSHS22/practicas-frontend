interface Animal {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
}

interface Bird extends Animal {
    canFly: boolean;
}

type DogRace = "husky" | "labrador" | "chucho";

interface Dog extends Animal {
    race: DogRace;
    age: number;
}

const parrot: Bird = {
    name: "Parrot",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: true
}

const dog: Dog = {
    name: "canelo",
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: "chucho",
    age: 3
}

export {}