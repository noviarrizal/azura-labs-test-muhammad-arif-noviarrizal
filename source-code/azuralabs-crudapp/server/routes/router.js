const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/add-products", services.add_product);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/update-products", services.update_product);

// API
route.post("/api/products", controller.create);
route.get("/api/products", controller.find);
route.put("/api/products/:id", controller.update);
route.delete("/api/products/:id", controller.delete);

module.exports = route;
