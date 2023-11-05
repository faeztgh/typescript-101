# Advanced TypeScript Concepts

In TypeScript, there are some advanced concepts that help you write more dynamic and robust code. Some of these concepts include Generics, Union Type, Intersection Type, Type Guards, Nullish Coalescing etc.

1. **Generics:**

Generics allow you to create reusable components. They can work with a variety of types while providing type safety.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

Here, `<T>` is a placeholder for any type you pass to the function.

2. **Union Type:**

A union type describes a value that can be one of several types. We use the vertical bar (`|`) to separate each type.

```typescript
function formatInput(input: string | number) {
    // Input can be string or number
}

formatInput("Hi");
formatInput(10);
```

3. **Intersection Types:**

Intersection types are used when we need to combine multiple types. This is done using `&`.

```typescript
interface A {
    a: string;
}
interface B {
    b: string;
}

type C = A & B;

let abc: C = {
    a: "Hello",
    b: "World",
};
console.log(abc.a); // Hello
console.log(abc.b); // World
```

4. **Type Guards:**

Type guards allow you to narrow down the type of an object within a conditional block.

```typescript
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
```

Here, `typeof` is being used as type guard.

5. **Nullish Coalescing:**

Nullish Coalescing is the use of `??` operator. It returns the first argument if it’s not null or undefined. Otherwise, it returns the second argument.

```typescript
const foo = null ?? "default string";
console.log(foo);
// expected output: "default string"
```

6. **Discriminated Unions:**

Discriminated unions, also known as tagged unions, are a way of creating complex types that are linked together in a type-safe way.

```typescript
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; w: number; h: number };

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.w * shape.h;
    }
}

const circle: Shape = {
    kind: "circle",
    radius: 5,
};

const rectangle: Shape = {
    kind: "rectangle",
    w: 5,
    h: 8,
};

console.log(getArea(circle));
console.log(getArea(rectangle));
```
