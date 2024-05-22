export default class Car {

    static location = "IND";

    constructor(carName) {

        this.car = carName;
    }

    carDetails() {

        return `${this.car} is a Best`;
    }

    static carLocation() {

        return `Made in ${Car.location}`
    }
}

export let millage = () => `Best Millage`;

export function driver(name) {
    
    return `Driver Name: ${name}`;
}


// export default Car;
// export {millage, driver};