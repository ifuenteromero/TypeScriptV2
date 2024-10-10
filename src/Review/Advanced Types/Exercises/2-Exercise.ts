// Birds fly.
// Fish swim.
// A Pet can be a Bird or Fish.
// Use type aliases to represent these

type Bird2 = {
	fly: () => void;
};

type Fish2 = {
	swim: () => void;
};

type Pet2 = Bird2 | Fish2;
