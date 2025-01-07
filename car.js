let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

let electricCar = Object.create(car);
electricCar.batteryCapacity = "75 kWh";

electricCar.getBatteryInfo = function() {
    return `Battery Capacity: ${this.batteryCapacity}`;
};

console.log(electricCar.getDetails());
console.log(electricCar.getBatteryInfo());
