"use strict";
class Ride2 {
    constructor() {
        this.activeRides = 0;
    }
    start() {
        this.activeRides++;
    }
    stop() {
        this.activeRides--;
    }
}
let ride3 = new Ride2();
ride3.start();
console.log({ ride3: ride3.activeRides });
let ride4 = new Ride2();
ride4.start();
console.log({ ride4: ride4.activeRides });
//# sourceMappingURL=10-StaticMembers.js.map