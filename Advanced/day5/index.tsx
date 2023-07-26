import React from "react";
/********************************  Union types + String Autocomplete ********************************/

/**
 * If we use bare string we lose the autocomplete on size property
 */
type ButtonSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | Omit<string, "xs" | "sm" | "md" | "lg">;

interface ButtonProps {
    size: ButtonSize;
}

export const Button = (props: ButtonProps) => {
    return <button className={`text-${props.size}`}></button>;
};

const Main = () => {
    return (
        <>
            <Button size="sm"></Button>
            <Button size="some other string"></Button>
        </>
    );
};

/********************************  Use it with Helper ********************************/

/**
 * A type helper for fixing autocomplete issue in union types
 */
type UnionAutocompleteHelper<T extends string> = T | Omit<string, T>;

type ButtonSize2 = UnionAutocompleteHelper<"xs" | "sm" | "md" | "lg">;

interface ButtonProps {
    size: ButtonSize2;
}
export const Button2 = (props: ButtonProps) => {
    return <button className={`text-${props.size}`}></button>;
};

const Main2 = () => {
    return (
        <>
            <Button size="sm"></Button>
            <Button size="some other string"></Button>
        </>
    );
};
