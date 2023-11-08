# Discriminated Unions

This TypeScript code uses the concept of **Discriminated Unions** to handle different types of shapes and calculate their areas.

Let's brake down the code:

-   First there are three types `Triangle`, `Circle` and `Rectangle`, each representing a geometric shape with specific properties. Each type has a property `kind` which is a string literal that uniquely identifies its type within the union.

```typescript
type Triangle = { kind: "triangle"; base: number; height: number };
type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; height: number; width: number };
```

-   The `Shape` type is a union type of these three shape types. A variable of type `Shape` can hold an object of any of these three types.

```typescript
type Shape = Circle | Triangle | Rectangle;
```

-   `getArea` function calculates the area based on what kind of `Shape` is passed to it. Inside this function, it utilizes JavaScript’s switch statement to determine the `kind` of the shape and applies the appropriate formula for calculating the area of that shape.

```typescript
function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.height * shape.width;
        case "triangle":
            return 0.5 * shape.height * shape.base;
    }
}
```

-   At the end of the script, each shape (circle, rectangle and triangle) objects are created and then passed to the `getArea` function. The area is then logged to the console.

```typescript
const myCircle: Shape = { kind: "circle", radius: 10 };
const myRectangle: Shape = { kind: "rectangle", height: 5, width: 6 };
const myTriangle: Triangle = { kind: "triangle", base: 10, height: 12 };

console.log(getArea(myCircle));
console.log(getArea(myRectangle));
console.log(getArea(myTriangle));
```

This is a really powerful pattern for handling multiple types in a type-safe way and you can see the beauty of TypeScript's static typing here.
