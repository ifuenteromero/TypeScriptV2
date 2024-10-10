"use strict";
class Ride2 {
    start() {
        Ride2._activeRides++;
    }
    stop() {
        Ride2._activeRides--;
    }
    static get activeRides() {
        return Ride2._activeRides;
    }
}
Ride2._activeRides = 0;
let ride3 = new Ride2();
ride3.start();
console.log({ ride3: Ride2.activeRides });
let ride4 = new Ride2();
ride4.start();
console.log({ ride4: Ride2.activeRides });
//# sourceMappingURL=10-StaticMembers.js.map