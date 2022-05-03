var Productdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
	// validate request
	if (!req.body) {
		res.status(400).send({ message: "Content can not be emtpy!" });
		return;
	}

	// new Product
	const product = new Productdb({
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
	});

	// save Product in the database
	product
		.save(product)
		.then((data) => {
			//res.send(data)
			res.redirect("/add-products");
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating a create operation",
			});
		});
};

// retrieve and return all Product/ retrieve and return a single Product
exports.find = (req, res) => {
	if (req.query.id) {
		const id = req.query.id;

		Productdb.findById(id)
			.then((data) => {
				if (!data) {
					res.status(404).send({ message: "Not found Product with id " + id });
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res
					.status(500)
					.send({ message: "Error retrieving Product with id " + id });
			});
	} else {
		Productdb.find()
			.then((product) => {
				res.send(product);
			})
			.catch((err) => {
				res.status(500).send({
					message:
						err.message ||
						"Error Occurred while retrieving Product information",
				});
			});
	}
};

// Update a new identified user by user id
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({ message: "Data to update can not be empty" });
	}

	const id = req.params.id;
	Productdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot Update Product with ${id}. Maybe Product not found!`,
				});
			} else {
				res.send(data);
			}
		})
		.catch((err) => {
			res.status(500).send({ message: "Error Update Product information" });
		});
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Productdb.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res
					.status(404)
					.send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
			} else {
				res.send({
					message: "Product was deleted successfully!",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Product with id=" + id,
			});
		});
};
