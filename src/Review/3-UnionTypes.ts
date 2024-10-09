const kgToLbs = (weight: number | string): number => {
	const conversionFactor = 2.20462;
	// here si haces weight. el tipo de métodos que salen son los comunes a number y string
	/*Narrowing the type wich is the process of refining the type of a variable 
    within a specific block of code. This is particularly useful when dealing 
    with union types, where a variable can be one of several types.
    By narrowing, you can determine the specific type of the variable 
    at runtime and safely perform operations that are valid for that type.*/
	if (typeof weight === 'number')
		/* Aqui los métodos que salen disponibles son de number */ return (
			weight * conversionFactor
		);
	/* Aqui los métodos que salen disponibles son de string */
	return parseFloat(weight) * conversionFactor;
};
