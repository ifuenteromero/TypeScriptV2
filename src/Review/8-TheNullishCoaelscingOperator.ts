// The nullish coalescing operator

let speed: number | null = null;
speed = 0;

const ride = {
	speed: speed ?? 30,
};

console.log(ride.speed); // 0
