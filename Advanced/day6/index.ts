type ReturnTypeOf<T> = T extends (...args: any[]) => infer U ? U : any;

// Using it with a function type
type Fun = ReturnTypeOf<(x: number, y: number) => number>; // Fun will be of type 'number'

// Using it with a non-function type
type NonFun = ReturnTypeOf<string>; // NonFun will be of type 'any'
