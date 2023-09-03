/******************************** Key Remover ********************************/

export const makeKeyRemover = <Key extends string | number | symbol>(
    keys: Key[]
) => {
    return <Obj extends Record<Key, unknown>>(obj: Obj): Omit<Obj, Key> => {
        const result = { ...obj };
        keys.forEach((key) => {
            if (key in obj) {
                // Check if key is present in Obj
                delete result[key]; // If yes, delete key
            }
        });
        return result;
    };
};

const keyRemover = makeKeyRemover(["name"]);

const res = keyRemover({ name: "Jane", id: 0, age: 58 });

console.log(res); //result : { id: 0, age: 58 }
