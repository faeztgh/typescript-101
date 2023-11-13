# Manipulating TypeScript Object Types with Omit and Pick Utility Types

Working with TypeScript, you might often find yourself needing to create new types based on existing ones, but with slightly different structures. This might involve excluding certain properties or selecting only specific properties from the original type. This blog post introduces two powerful TypeScript utility types - `Omit` and `Pick` - that makes this a breeze.

Let's start by demonstrating these utility types in action, and later we will dive deeper into their workings.

First, let's create an interface `Person`:

```ts
interface Person {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}
```

The `Person` interface has four properties: `id` (number), `name` (string), `email` (string), and `createdAt` (Date).

Now let's say we want to create a new object, which should only have the `name` and `email` properties from the `Person` interface.

## The Omit Utility Type

One way to do this is to use the `Omit` utility type:

```ts
const newPerson: Omit<Person, "id" | "createdAt"> = {
    name: "Jane",
    email: "jane@test.com",
};
```

In this example, `newPerson` is an object of type `Omit<Person, "id" | "createdAt">`. The `Omit` utility type creates a new type by picking all properties from the `Person` type and then removing `"id"` and `"createdAt"`. This leaves `newPerson` as an object with only `name` and `email`, which are the remaining properties from the `Person` interface.

## The Pick Utility Type

Alternatively, we can achieve the same result using the `Pick` utility type:

```ts
const newPerson3: Pick<Person, "name" | "email"> = {
    name: "Jane",
    email: "jane@test.com",
};
```

In this case, `newPerson3` is an object of type `Pick<Person, "name" | "email">`. The `Pick` utility type creates a new type by choosing specific properties (`"name"` and `"email"`, in this example) from the `Person` entity. Therefore, `newPerson3` has precisely the same properties as defined in the `Pick` type - `name` and `email`.

## Conclusion

In essence, both `Omit` and `Pick` utility types provide powerful ways to manipulate TypeScript's object types. The `Omit` type lets you create a new type with certain properties excluded from the original type, while the `Pick` type lets you create a new type with only specific properties selected from the original type.

Both of these utility types can come in extremely handy when dealing with large interfaces, or when you want to ensure that certain parts of your codebase operate on only specific portions of your data types.

Understanding and leveraging TypeScript's utility types like `Omit` and `Pick` will make you more efficient at writing robust static types, reducing potential runtime errors, and improving your overall codebase maintainability.
