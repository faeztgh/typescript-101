# Creating a Key Remover Function with Generics

I'll be explaining an interesting piece of TypeScript code that exploits the power of generics to remove specified keys from an object.

## Code Overview

```typescript
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
```

The function we're discussing, `makeKeyRemover`, takes as argument an array of keys (of type Key which is either a string, number or symbol. This flexibility allows us to work with any type of key an object may have).

Then, it returns another function that accepts an object (`obj`), who's property values can be of any type (`unknown` type in TypeScript), and returns a new version of that object with certain keys removed.

Let's delve deeper into how this works.

## Power of Generics

This function illustrates how TypeScript's generics can be used to create flexible, reusable functionality while maintaining strong type safety.
Here, `<Key extends string | number | symbol>(keys: Key[])` is a generic function parameter that extracts the type of the keys we want to remove.

Similarly, `<Obj extends Record<Key, unknown>>(obj: Obj): Omit<Obj, Key>` is a generic representing our object and its resultant form after removing the keys. Here, `Omit<Obj, Key>` is a built-in TypeScript utility type that constructs a type by picking all properties from `Obj` and then removing `Key`.

## Working Example

```typescript
const keyRemover = makeKeyRemover(["name"])({ name: "Jane", id: 0, age: 58 });
console.log(keyRemover); // Result : { id: 0, age: 58 }
```

In this example, the `makeKeyRemover` function is first called with an array containing a single string "name". It returns a new function which is immediately invoked with an object `{ name: "Jane", id: 0, age: 58 }`. This results in a new object with the "name" property removed.

## Conclusion

This code demonstrates how to create flexible, robust and reusable functions in TypeScript using generics. The ability to infer and manipulate types makes your code safer and less prone to runtime errors. This powerful feature of TypeScript brings a level of precision and robustness to JavaScript development, making your applications more reliable and maintainable.
