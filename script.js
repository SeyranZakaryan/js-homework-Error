class Vehicle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
        this.passengerSeatMaxCount = 4;
    }

    setMyPassenger(val) {
        if (val > this.passengerSeatMaxCount) {
            throw new Error("This vehicle has not more than " + this.passengerSeatMaxCount + " seat.")
        }
        if (val < 0) {
            throw new Error("Passenger count can not be negative.")
        }
        this.passengerCount = val;
    }
}

class Truck extends Vehicle {
    constructor(name, drivingClass) {
        super();
        this.name = name;
        this.drivingClass = drivingClass;
    }
    toDrive(value) {
        if (value !== "E") {
            throw new Error("You have not a truck driving license class.");
        }
    }
//???????
}

class Motorcycle extends Vehicle {

}

class Train extends Vehicle {

}

class Bicycle extends Vehicle {
}

class Driver {
    constructor(drivingLicenseClass) {
        this.drivingLicenseClass = drivingLicenseClass;
    }
}

class MotorcycleDriver extends Driver {
}

class TruckDriver extends Driver {
}


let car = new Car("Bmw", "black");

function myCarError(message) {
    try {
        car.setMyPassenger(2);
        console.log(car);
    } catch (error) {
        console.log(error);
    }

}

myCarError();


let motorcycleDriver = new MotorcycleDriver("A");
let truckDriver = new TruckDriver("E");
let truck = new Truck();

function myTruckError(message) {
    try {
        truck.toDrive(motorcycleDriver);
    } catch (error) {
        console.log(error);
    }
}

myTruckError();