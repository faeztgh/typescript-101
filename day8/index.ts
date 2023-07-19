export const makeKeyRemover =
    <Key extends string>(Keys: Key[]) =>
    <Obj>(obj: Obj): Omit<Obj, Key> => {
        return {} as any;
    };

const keyRemover = makeKeyRemover(["name"]);

const res = keyRemover({ name: "Jane", id: 0, age: 58 });

console.log(JSON.stringify(res));
