## Overview

It shows the use of `const` assertions, types, type inference as well as `keyof`, a comprehensive way to extract keys from a type.

1. **Defining constant object:**

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

    The `socials` constant object is defined. The `as const` syntax is a TypeScript construct known as a `const assertion`. `socials` and its properties are read-only. Each property is a URL string for a social networking site.

2. **Type declaration:**

    ```typescript
    type SocialTypes = typeof socials;
    ```

    Here, a new type `SocialTypes` is created using the `typeof` keyword, which infers the type from an expression. `typeof socials` returns the inferred type of the `socials` object. As a result, `SocialTypes` is a type equivalent to the structure of `socials`.

3. **Constant initialization:**

    ```typescript
    const facebook = socials.facebook;
    ```

    A new constant `facebook` is declared and initialized with the value of the `facebook` property from the `socials` object. This string `"https://facebook.com"` is now stored in `facebook`.

4. **Function declaration:**

    ```typescript
    const getSocialName = (input: SocialTypes[keyof SocialTypes]) => {
        return input.split("//")[1].split(".")[0];
    };
    ```

    `getSocialName` is a function that takes one argument `input`. This function is designed to work with URLs of the format `https://name.com` and will extract 'name' from it.

    The `input` parameter is typed as `SocialTypes[keyof SocialTypes]`, which means it expects one of the values from `socials`. `keyof SocialTypes` gives all potential property names of `SocialTypes` as literal types while `SocialTypes[keyof SocialTypes]` gives all corresponding property values.

The function `split("//")[1].split(".")[0]` separates the URL by `//` and then again by `.`, to retrieve name of the social media platform.

5. **Function calls:**

    ```typescript
    console.log(getSocialName(socials.google)); // google
    console.log(getSocialName(socials.facebook)); // facebook
    ```

    These lines test the `getSocialName` function with `socials.google` and `socials.facebook` URLs. The outputs are `google` and `facebook` respectively.

## Conclusion

This code demonstrates how to work with static typing in TypeScript, create strictly-typed structures, infer types, and use keys to access values from typed objects. It highlights the strictness and flexibility offered by TypeScript's type system.
