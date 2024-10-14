// Generic interfaces are interfaces that are parameterized over types.

// Tenemos 2 api endpoints
const myWebsiteEndpoint = 'https://mywebsite.com';
const usersEndpoint = myWebsiteEndpoint + '/users';
const productsEndpoint = myWebsiteEndpoint + '/products';

interface Result<T> {
	data: T[] | null;
	error: string | null;
}

const fetch2 = <T>(_endpoint: string): Result<T> => {
	return { data: null, error: null };
};

interface User3 {
	username: string;
}

interface Product3 {
	title: string;
}

const usersData = fetch2<User3>(usersEndpoint);
const users3 = usersData.data;
users3?.forEach((user) => console.log(user.username));

const productsData = fetch2<Product3>(productsEndpoint);
const products = productsData.data;
products?.forEach((product) => console.log(product.title));
