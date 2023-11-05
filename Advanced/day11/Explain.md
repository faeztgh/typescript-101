# Deeper Dive into Decorators in TypeScript

Decorators are a unique feature introduced in TypeScript, and are a contribution to JavaScript's future. This article covers what they are, how they work, and how you can use them to level up your TypeScript!

## What are Decorators?

In TypeScript, decorators are special kinds of declarations that can be attached to classes, methods, accessor, property, or parameter. They use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration.

While this might sound abstract, let's first examine the syntax:

```typescript
@decoratorName
class MyClass {
    // Some properties or methods
}
```

The decorator is placed just before the declaration it applies to - in this case, a class.

## Declaring a Simple Decorator

Let's declare a simple decorator `@logClass` that logs the class name when a class is instantiated:

```typescript
function logClass(target: Function) {
    console.log(`Class "${target.name}" has been declared.`);
}

@logClass
class MyClass {
    constructor() {
        console.log("MyClass instance created!");
    }
}

let myInstance = new MyClass();
// Logs:
// Class "MyClass" has been declared.
// MyClass instance created!
```

Here, `logClass` is a decorator that takes a single parameter `target` which is the constructor function of the class being decorated.

## Method Decorators

Method decorators can be applied to the property descriptor for method, get, set on an object. A method Decorator is declared just before a method declaration:

```typescript
function logMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    console.log(`Method "${propertyKey}" has been declared.`);
}

class MyClass {
    @logMethod
    myMethod() {
        console.log("Running myMethod!");
    }
}

let myInstance = new MyClass();
myInstance.myMethod();
// Logs:
// Method "myMethod" has been declared.
// Running myMethod!
```

Here, `logMethod` is a method decorator that logs the name of the method which it decorates.

## Property Decorators

Property decorators are declared just before a property declaration:

```typescript
function logProperty(target: any, propertyKey: string) {
    console.log(`Property "${propertyKey}" has been declared.`);
}

class MyClass {
    @logProperty
    myProp: number;

    constructor() {
        this.myProp = 5;
    }
}

let myInstance = new MyClass();
console.log(myInstance.myProp);
// Logs:
// Property "myProp" has been declared.
// 5
```

This code shows a property decorator `@logProperty`, which logs whenever a property is declared in a class.

## Parameter Decorators

Parameter decorators are attached to function parameters, and they can't modify a parameter descriptor or target. They're used primarily for metadata about parameters:

```typescript
function logParameter(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    console.log(
        `Parameter at index ${parameterIndex} within method "${String(
            propertyKey
        )}" has been declared.`
    );
}

class MyClass {
    myMethod(@logParameter param1: string, @logParameter param2: number) {
        console.log("Running myMethod!");
    }
}

let myInstance = new MyClass();
myInstance.myMethod("test", 10);
// Logs:
// Parameter at index 0 within method "myMethod" has been declared.
// Parameter at index 1 within method "myMethod" has been declared.
// Running myMethod!
```

The `@logParameter` decorator logs information about parameters in a class method. In our example, we see that it logs the parameters' index values.

## Conclusion

Decorators in TypeScript offer a way to add both annotations and a meta-programming syntax for class declarations and members. They further provide an avenue to modify or augment classes and their elements at design time.

It is important to note that decorators are currently a stage 2 proposal for JavaScript and not yet finalized in the language specification - so use with caution in production code!

While TypeScript has embraced them as a first-class language feature, they might still undergo changes before becoming part of the JavaScript standard. Hopefully, this blog gives you a good starting point to dive deeper into the world of TypeScript decorators!
