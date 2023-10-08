const HelloPersonMethod2 = (
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
) => {
    console.log(target); // {}
    console.log(propertyKey); // printId
    console.log(propertyDescriptor);
};

const ClassDec = (name: string) => {
    return (target: Function & typeof Person5) => {
        target.userName = name;
        console.log(name);
        console.log(target);
    };
};

@ClassDec("ali")
class Person5 {
    static userName: string;
    // @HelloPersonMethod2
    printName(prefix: string = "") {
        return prefix;
    }
}


//==============================================================================

const isAuth = true;

function AuthDecorator(
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
) {
    // Save a reference to the original method
    const originalMethod = descriptor.value;

    // Rewrite the original method with our new one
    descriptor.value = function (...args: any[]) {
        if (!isAuth) {
            console.log("User is not authenticated!");
            return;
        }

        // The user is authenticated, call the original method
        let result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}

class Testing {
    @AuthDecorator
    someMethod() {
        console.log("This is some method");
    }
}

let test = new Testing();
test.someMethod(); // Will only run if isAuth is true
