// Add your Circle class here
// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return (2 * this.radius);
    }

    set diameter(diameter) {
        //to get the radius from the diameter
        this.radius = diameter / 2;
    }

    get circumference() {
        return (2 * Math.PI * this.radius);
    }

    set circumference(circumference) {
        //to get the radius from the circumference
        this.radius = circumference / (Math.PI * 2);
    }

    get area() {
        return (Math.PI * (this.radius * this.radius));
    }

}