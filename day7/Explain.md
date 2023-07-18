# Decode Params

This TypeScript code is creating an object `obj` that represents the query parameters in a URL string, and it utilizes the power of TypeScript's advanced types and 'ts-toolbelt', a TypeScript utility library, to produce IntelliSense autocompletion for those parameters.

Let's break it down:

```typescript
import { String, Union } from "ts-toolbelt";
```

Here, you are importing some utilities from the ts-toolbelt library.

```typescript
const query = `/home?a=hello&b=bye`;
type Query = typeof query;
```

This defines a constant `query` as a string and uses `typeof` to derive its type.

```typescript
type SecondaryQueryPart = String.Split<Query, "?">[1];
```

This line uses `String.Split` from ts-toolbelt to split the URL into two parts by the "?" character. The resulting tuple is indexed at position 1 (zero-based indexing) to get the part after the "?".

```typescript
type QueryElements = String.Split<SecondaryQueryPart, "&">;
```

Here, the part after the "?" is further split using the "&" character. This splits individual query parameters into elements.

```typescript
type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [key in String.Split<QueryElement, "=">[0]]: String.Split<
            QueryElement,
            "="
        >[1];
    };
}[QueryElements[number]];
```

This complex structure uses mapped types to create a new type representing the key and value pairs in the query string. It maps each `QueryElement` from the `QueryElements` type and splits it around the "=" character. It then uses these split values to form a new record type with keys and corresponding values. The resulting type leverages keyof types and lookup types.

```typescript
const obj: Union.Merge<QueryParams> = {
    a: "hello",
    b: "bye",
};
```

Now we define `obj` which has a type of `Union.Merge<QueryParams>`. `Union.Merge` is another ts-toolbelt utility that merges intersection types into one single type. So `obj` now represents an autocompletable object with inferred types for a specific URL's query parameters.

In essence, this script creates a way to infer keys and possible values for URL parameters from given URLs, facilitating better completion suggestions and a strong typing experience in TypeScript.
