# TypeScript: Deep Dive into Const Assertions and Utility Types

Today, we are going to explore an interesting piece of TypeScript code. This script showcases the use of const assertions to define a constant object, utility types for type manipulations, and generics to create flexible functions maintaining strong type safety. Let's get started.

## Code Overview

```typescript
const socials = {
    facebook: "https://facebook.com",
    google: "https://google.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    pinterest: "https://pinterest.com",
} as const;
```

Here, `as const` is a const assertion that tells TypeScript to infer the narrowest type for the `socials` object. It ensures the object and its properties are entirely read-only, essentially telling TypeScript to consider this object as a constant.

## Using Utility Types to Extract Keys and Values

```typescript
type SocialTypes = typeof socials;
type SocialValues = SocialTypes[keyof typeof socials];
```

We use two utility types here. First, `typeof` operator is used to retrieve the type of the `socials` object. Then, using indexed access (`Keyof` and `SocialTypes[keyof SocialTypes]`), we extract all keys and corresponding values of `socials`.

## Creating Reusable Functions with Generics

```typescript
const getSocialName = (
    input: SocialTypes[keyof SocialTypes]
): keyof SocialTypes | undefined => {
    return (Object.keys(socials) as (keyof SocialTypes)[]).find((key) => {
        return socials[key] === input;
    });
};

console.log(getSocialName("https://facebook.com")); // facebook
console.log(getSocialName(socials.facebook)); // facebook
```

Here, we create a `getSocialName` function to determine the social network name from a given URL. We typecast keys of `socials` to an array of `keyof SocialTypes`, then find the key that matches provided input.

```typescript
const getSocialValue = (input: keyof SocialTypes): SocialValues => {
    return socials[input];
};

console.log(getSocialValue("facebook")); // "https://facebook.com"
```

Similar to the `getSocialName` function, we have `getSocialValue` that returns the value (URL) corresponding to the passed social network name.

In both functions, `SocialTypes[keyof SocialTypes]` and `keyof SocialTypes` serve as generic constraints ensuring passed arguments are always valid with respect to `socials` object.

## Conclusion

This TypeScript code represents an excellent use case of const assertions and utility types for robust and type-safe programming. With the smart use of generics and utility types, TypeScript enables developers to create flexible, reusable models without compromising type safety and integrity. It's truly one of the ways TypeScript brings precision and robustness to JavaScript, making our applications reliable and maintainable.
