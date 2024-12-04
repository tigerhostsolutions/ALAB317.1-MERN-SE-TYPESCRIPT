class Vehicle {
    make: string;
    model: string;
    wheels: any;


    status = "stopped";
    constructor(make: string, model:string, wheels:any) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class Car extends Vehicle {
    constructor(make:string, model:string) {
        super(make, model, "four");
    }
}
class MotorCycle extends Vehicle {
    constructor(make:string, model:string) {
        super(make, model, 2);
    }
}
function printStatus(vehicle: any) {
    if (vehicle.status === "running") {
        console.log("The vehicle is running.");
    } else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();

printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);