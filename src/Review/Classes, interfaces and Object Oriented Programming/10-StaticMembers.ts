// Static members
// Static members are properties and methods that belong to the class itself, not to the instances of the class (object).
// Example: Tenemos una aplicación como uber y tenemos una clase donde queremos guardar el número de carreras en activo.

class Ride2 {
	private static _activeRides: number = 0;
	start(): void {
		Ride2._activeRides++;
	}

	stop(): void {
		Ride2._activeRides--;
	}

	static get activeRides(): number {
		return Ride2._activeRides;
	}
}

let ride3 = new Ride2();
ride3.start();

console.log({ ride3: Ride2.activeRides }); // { ride3: 1 }

let ride4 = new Ride2();
ride4.start();

console.log({ ride4: Ride2.activeRides }); // { ride4: 2 }

// Si queremos que el número de carreras en activo sea el mismo para todas las instancias de la clase, podemos usar un miembro estático.

// Al cambiarlo por static activeRides: number = 0; el valor de activeRides es compartido por todas las instancias de la clase.

// Solo hay un problemas más aquí y es que podemos seguir modificando activeRides de la siguiente manera:
// Ride2.activeRides = 10;
// console.log({ activeRides: Ride2.activeRides }); // { activeRides: 10 }

// Para evitarlo, podemos hacer que activeRides sea privado y crear un getter para acceder a él.
