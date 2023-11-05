/******************************** Dynamic Value ********************************/

interface IDynamic<T> {
    [key: string]: T;
}

const person: IDynamic<string | number> = {
    id: 1,
    name: "Jane",
    age: 30,
    gender: "female",
    // isAdmin: true,
};

const animal: IDynamic<string | number | typeof person | boolean> = {
    name: "Stacy",
    age: 5,
    bread: "dog",
    owner: person,
    isAdmin: true,
};
