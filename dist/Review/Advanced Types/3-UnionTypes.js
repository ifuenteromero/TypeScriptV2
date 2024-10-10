"use strict";
const kgToLbs = (weight) => {
    const conversionFactor = 2.20462;
    if (typeof weight === 'number')
        return (weight * conversionFactor);
    return parseFloat(weight) * conversionFactor;
};
//# sourceMappingURL=3-UnionTypes.js.map