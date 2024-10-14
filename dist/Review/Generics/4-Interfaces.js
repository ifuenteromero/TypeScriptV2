"use strict";
const myWebsiteEndpoint = 'https://mywebsite.com';
const usersEndpoint = myWebsiteEndpoint + '/users';
const productsEndpoint = myWebsiteEndpoint + '/products';
const fetch2 = (_endpoint) => {
    return { data: null, error: null };
};
const usersData = fetch2(usersEndpoint);
const users3 = usersData.data;
users3 === null || users3 === void 0 ? void 0 : users3.forEach((user) => console.log(user.username));
const productsData = fetch2(productsEndpoint);
const products = productsData.data;
products === null || products === void 0 ? void 0 : products.forEach((product) => console.log(product.title));
//# sourceMappingURL=4-Interfaces.js.map