const produkData = [
	{ name: "Indomie", harga: 3000, rating: 5, likes: 150 },
	{ name: "Laptop", harga: 4000000, rating: 4.5, likes: 123 },
	{ name: "Aqua", harga: 3000, rating: 4, likes: 250 },
	{ name: "Smart TV", harga: 4000000, rating: 4.5, likes: 42 },
	{ name: "Headphone", harga: 4000000, rating: 3.5, likes: 90 },
	{ name: "Very Smart TV", harga: 4000000, rating: 3.5, likes: 87 },
];

const priorityData = (a, b) => {
	if (a.harga > b.harga) {
		return 1;
	} else if (a.harga === b.harga) {
		return 1;
	} else if (a.rating === b.rating) {
		return 1;
	} else {
		return -1;
	}
};
console.log(produkData.sort(priorityData));
