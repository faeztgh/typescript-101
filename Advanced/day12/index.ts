/******************************** Discriminated Unions ********************************/

type Triangle = { kind: "triangle"; base: number; height: number };
type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; height: number; width: number };

type Shape = Circle | Triangle | Rectangle;

/**
 * Calculates the area of a shape based on its kind.
 *
 * @param {Shape} shape - The shape object to calculate the area for.
 * @return {number} The calculated area of the shape.
 */
function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.height * shape.width;
        case "triangle":
            return 0.5 * shape.height * shape.base;
    }
}

const myCircle: Shape = { kind: "circle", radius: 10 };
const myRectangle: Shape = { kind: "rectangle", height: 5, width: 6 };
const myTriangle: Triangle = { kind: "triangle", base: 10, height: 12 };

console.log(getArea(myCircle));
console.log(getArea(myRectangle));
console.log(getArea(myTriangle));
