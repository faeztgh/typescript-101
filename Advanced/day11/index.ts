/******************************** Class Decorators ********************************/

console.log("++++++++++++++++++++++ Class Decorators +++++++++++++++++++++++");

const Component = (target: Function) => {
    target.prototype.id = 100;
};

@Component
class Person {
    static elementId: string;
    id: number;

    printId(prefix: string): string {
        return `${prefix}${this.id}`;
    }
}

console.log("Person1: ", new Person().id);

/******************************** Decorator Factory ********************************/

const Component2 = (options: { id: string }) => {
    return (target: Function & typeof Person2) => {
        target.elementId = options.id;
    };
};

@Component2({
    id: "123",
})
class Person2 {
    static elementId: string;
    id: number;

    printId(prefix: string = ""): string {
        return `${prefix}${this.id}`;
    }
}

console.log("Person2: ", Person2.elementId);

// =====================================================================================
console.log("++++++++++++++++++++++ Method Decorators +++++++++++++++++++++++");
/******************************** Method Decorators ********************************/

const HelloPersonMethod = (
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
) => {
    console.log(target); // {}
    console.log(propertyKey); // printId
    propertyDescriptor.value = (...args: any[]) => {
        return `Hello ${args}`;
    };
};

class Person3 {
    @HelloPersonMethod
    printName(prefix: string = "") {
        return prefix;
    }
}

console.log("Person3: ", new Person3().printName("Najmodin"));

// =====================================================================================
console.log(
    "++++++++++++++++++++++ Property Decorators +++++++++++++++++++++++"
);
/******************************** Property Decorators ********************************/

const Prop = (target: Object, propertyName: string) => {
    let value: number;
    const getter = () => {
        return value;
    };
    const setter = (newVal: number) => {
        value = newVal;
    };

    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
    });
};

class Person4 {
    @Prop
    id: number;

    printName(prefix: string = "") {
        return prefix + this.id;
    }
}

const p4 = new Person4();
p4.id = 560;
console.log("Person4: ", p4.id);
