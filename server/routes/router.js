const express = require("express");
const route = express.Router();
const services = require('../services/render');


/**
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRoute);


/**
 * @description add-user
 * @method GET /add-user
 */
route.get("/add-user",services.add_userRoute);


/**
 * @description update-user
 * @method GET /update-user
 */
route.get("/update-user",services.update_userRoute);

module.exports = route;