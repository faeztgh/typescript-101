# TypeScript: A Superset of JavaScript

TypeScript is a superset of JavaScript developed by Microsoft. It adds static types to the language, which can make the code more robust and easier to understand.

## Basic Types in TypeScript

Here are the main data types in TypeScript:

1. **Boolean:**

The most basic datatype is the simple true/false value, which JavaScript and therefore TypeScript calls a boolean.

```typescript
let isDone: boolean = false;
```

2. **Number:**

As in JavaScript, all numbers in TypeScript are floating-point values. These floating point numbers get the type number.

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
```

3. **String:**

To represent textual datatypes, we use the string type in TypeScript.

```typescript
let color: string = "blue";
color = "red";
```

4. **Array:**

TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways.

```typescript
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // generic array
```

5. **Tuple:**

Tuple types allow you to express an array with a fixed number of elements whose types are known but do not need to be the same.

```typescript
let x: [string, number] = ["hello", 10]; // OK
```

6. **Enum:**

A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

```typescript
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
```

7. **Any:**

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g., from the user or a 3rd party library. In these cases, we want to opt out of type checking and let the values pass through compile-time checks; That’s where the any type comes in.

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

8. **Void:**

void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.

```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

## Interfaces

Interfaces are used for type-checking that determines the shape an object should have. They're a powerful way to define contracts within your code.

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    console.log(`Hello, ${person.firstName}`);
}

let user = { firstName: "John", lastName: "Doe" };

greet(user);
```

## Classes

TypeScript supports Object-Oriented Programming concepts like classes, interfaces, inheritance, etc.

```typescript
class Student {
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let student = new Student("John", "M.", "Doe");

console.log(student.fullName); // John M. Doe
```

I hope this provides a good start to understanding TypeScript! There's a lot more to learn, such as generics, modules, decorators and so on, so I would highly recommend further study.
