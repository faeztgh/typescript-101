# Infer

## Explanation

The `infer` keyword in TypeScript is all about deduction. It's used in conditional types to deduce and work with types that were otherwise unavailable.

Think of it like this: You're a detective (TypeScript) and you have a box (a type). Let's assume the box is locked, and you don't know what is inside. But by using some hints or clues (using `infer`), you can make an educated guess about what's inside.

In TypeScript generics, `infer` plays a similar role. Let's take an example:

```typescript
type ElementOfArray<T> = T extends Array<infer U> ? U : never;
```

What this code does is define a new type alias, `ElementOfArray`. `ElementOfArray` takes a type `T` and checks whether it's an array. If `T` is an array, TypeScript infers that there must be a certain type `U` being held in that array. `U` stands for any type that could be inside the given array. And so, if `T` is indeed an array, `ElementOfArray` becomes whatever type `U` was inferred to be (i.e., the type of elements in the array). If `T` isn't an array, then `ElementOfArray` simply becomes `never`.

So to sum up things, `infer` is like a tool for TypeScript that helps it "guess" types based on context when those types aren't explicitly provided.

## More Simple Explanation

You can think of TypeScript's infer keyword as a tool for guessing. It allows TypeScript to make an "educated guess" about a type when that type isn't clearly specified.

It's kind of like when you're trying to guess what present is inside a wrapped gift box by feeling its weight, shaking it lightly, or judging by the size of the box.

Imagine you are playing a game where you have lots of boxes (which in our case are types). You pick one box and you don't know what's in it. But if you use the magic word infer, you can guess what's inside!

For example, if you have a box full of apples (an array of numbers), TypeScript can infer that this box contains apples (numbers).

That's essentially what infer does - it tries to figure out what type is inside another type (like figuring out that there are apples (numbers) in the box (array)).

## The Most simple Explanation

Imagine you have a bag of mixed candies (which represents a complex data type). The candies could be lollipops, chocolates, gummies, etc. You cannot see inside the bag directly, so how can you guess what types of candy are in there?

Here is where infer comes in. Imagine infer as your friend who has X-ray vision and can look into the bag. He can tell you, "Hey, there are lollipops, chocolates, and gummies in there!"

In this analogy, 'lollipops', 'chocolates', and 'gummies' are the specific data types infer can identify within the complex data type (the bag of mixed candies).

Just like your friend helps to identify the types of candies without opening the bag, TypeScript's infer keyword allows it to determine the specific types contained within a complex data type.

## Final Example

Let's say we want to create a type that extracts the return type of a function. Here's how it would look like:

```typescript
type ReturnTypeOf<T> = T extends (...args: any[]) => infer U ? U : any;

// Using it with a function type
type Fun = ReturnTypeOf<(x: number, y: number) => number>; // Fun will be of type 'number'

// Using it with a non-function type
type NonFun = ReturnTypeOf<string>; // NonFun will be of type 'any'
```

In this code:

We define a new type ReturnTypeOf<T> which uses infer to find out the return type of a function.
If T is a function that returns some type U, then ReturnTypeOf<T> becomes that U.
Otherwise, if T is not a function, then ReturnTypeOf<T> just becomes any.
