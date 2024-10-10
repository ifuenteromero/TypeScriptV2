// Static members
// Static members are properties and methods that belong to the class itself, not to the instances of the class (object).
// Example: Tenemos una aplicación como uber y tenemos una clase donde queremos guardar el número de carreras en activo.

class Ride2 {
	activeRides: number = 0;
	start(): void {
		this.activeRides++;
	}

	stop(): void {
		this.activeRides--;
	}
}

let ride3 = new Ride2();
ride3.start();

console.log({ ride3: ride3.activeRides }); // { ride3: 1 }

let ride4 = new Ride2();
ride4.start();

console.log({ ride4: ride4.activeRides }); // { ride4: 1 }

// Si queremos que el número de carreras en activo sea el mismo para todas las instancias de la clase, podemos usar un miembro estático.
