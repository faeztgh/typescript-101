# TypeScript: Mastering Overloading and Generics

TypeScript, a statically typed superset of JavaScript, brings in optional static types and class-based object-oriented programming to the language. Two critical concepts that TypeScript introduces are Overloading and Generics. These features bring more flexibility, code reusability, and safety to our programs.

In this article, we will delve deep into understanding these two TypeScript features through some hands-on examples.

## Function Overloading

Function Overloading in TypeScript is the ability to create several methods with the same name but different parameter types or numbers. The compiler uses the number, types, and order of arguments to determine which method to invoke.

Let's look at an example:

```ts
export function myFunction(input: string): string;
export function myFunction(input: number): number;

/**
 * Overloads
 * @param input
 * @returns number|string
 */
export function myFunction(input: unknown): unknown {
    return input;
}
```

In the example above, we overloaded `myFunction` with two signatures. One accepts a string argument and returns a string, and the other takes a number and returns a number.

The actual implementation of `myFunction` accepts an input of unknown type and returns an unknown. This overload implementation must be compatible with the types declared in all overloads. We use `unknown` as the type because it can cover both string and number types, making it compliant with the overload signatures.

Check out how we call `myFunction` with different argument types:

```ts
const overloadNumberRes = myFunction(12);
const overloadStringRes = myFunction("");
const overloadUnknownRes = myFunction([]);
```

Depending on the type of argument passed, TypeScript provides IntelliSense and compile-time checks based on the appropriate overload. This feature allows us to have a single function that handles multiple data types, improving code readability and maintainability.

## Generic Functions

Generics are another powerful feature of TypeScript, enabling us to create reusable components that can work with any type.

Let's take a look at an example:

```ts
/**
 * Generics
 * @param input
 * @returns T
 */
export function myGenericFunction<T>(input: T): T {
    return input;
}
```

In the above example, `myGenericFunction` is a generic function and is declared with a placeholder (T). This function can work with any type T. The exciting part about this is that the type T is determined when the function is invoked, not defined. The function accepts an argument of type T and also returns a type T.

Here's how we call `myGenericFunction` with explicitly specified generic types:

```ts
const genericStringRes = myGenericFunction<string>("");
const genericNumberRes = myGenericFunction<number>(5);
const genericArrayRes = myGenericFunction<Array<unknown>>([]);
const genericObjectRes = myGenericFunction<object>({});
```

When invoking `myGenericFunction`, TypeScript ensures the type of arguments passed and returned values match depending on the type specified within angle brackets, enhancing type safety in our program.

## Conclusion

TypeScript's advanced features like Overloading and Generics supercharge JavaScript by bringing strong static typing and additional OOP features. With TypeScript, we get all the flexibility JavaScript has to offer along with compile-time checks, making our applications robust, maintainable and less prone to run-time errors. So next time you're working on a TypeScript project, try using Overloading and Generics; it may just make your work that much smoother!
