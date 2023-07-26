/********************************  Overload and Generic ********************************/
export function myFunction(input: string): string;
export function myFunction(input: number): number;
/**
 * Overloads
 * @param input
 * @returns number|string
 */
export function myFunction(input: unknown): unknown {
    return input;
}

const overloadNumberRes = myFunction(12);
const overloadStringRes = myFunction("");
const overloadUnknownRes = myFunction([]);

/**
 * Generics
 * @param input
 * @returns T
 */
export function myGenericFunction<T>(input: T): T {
    return input;
}

const genericStringRes = myGenericFunction<string>("");
const genericNumberRes = myGenericFunction<number>(5);
const genericArrayRes = myGenericFunction<Array<unknown>>([]);
const genericObjectRes = myGenericFunction<object>({});
