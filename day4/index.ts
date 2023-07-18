/********************************  Overload and Generic ********************************/
export function myFunction(input: string): string;
export function myFunction(input: number): number;

/**
 *
 * @param input
 * @returns number|string
 * Overloads
 */
export function myFunction(input: unknown): unknown {
    return input;
}

const overloadNumberRes = myFunction(12);
const overloadStringRes = myFunction("");
const overloadUnknownRes = myFunction([]);

/**
 *
 * @param input
 * @returns T
 * Generics
 */
export function myGenericFunction<T>(input: T): T {
    return input;
}

const genericStringRes = myGenericFunction("");
const genericNumberRes = myGenericFunction(5);
const genericArrayRes = myGenericFunction([]);
const genericObjectRes = myGenericFunction({});
