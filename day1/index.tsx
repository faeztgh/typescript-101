/********************************  Conditional Props ********************************/
import React from "react";
type Props = {
    name: string;
} & (MaleProps | FemaleProps);

type MaleProps = { gender: "male"; salary: number };
type FemaleProps = {
    gender: "female";
    weight: number;
};

const Todo = (props: Props) => {
    return <>hi</>;
};

/**
 * By changing gender props would be different
 */
const UseTodo = () => {
    return <Todo gender="male" name="John" salary={50} />;
};
