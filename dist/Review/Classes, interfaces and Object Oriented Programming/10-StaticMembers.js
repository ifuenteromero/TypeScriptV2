"use strict";
class Ride2 {
    start() {
        Ride2.activeRides++;
    }
    stop() {
        Ride2.activeRides--;
    }
}
Ride2.activeRides = 0;
let ride3 = new Ride2();
ride3.start();
console.log({ ride3: Ride2.activeRides });
let ride4 = new Ride2();
ride4.start();
console.log({ ride4: Ride2.activeRides });
//# sourceMappingURL=10-StaticMembers.js.map