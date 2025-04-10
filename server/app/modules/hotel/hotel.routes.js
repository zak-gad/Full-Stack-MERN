const express = require("express");
const router = express.Router();
const hotelController = require("./hotel.controller");
const { uploadFile } = require("../../shared/middleware/uploads");
const checkRole = require("../../shared/middleware/checkRole");

router.post("/hotel",checkRole(["admin"]),uploadFile("hotels").array("images"), hotelController.insertHotel);

// Delete a hotel by ID
router.delete("/hotel/:id",checkRole(["admin"]), hotelController.deleteHotel);

// Update a hotel by ID
router.put("/hotel/:id",checkRole(["admin"]),uploadFile("hotels").array("images"), hotelController.updateHotel);

// Get all hotels

router.get("/hotel",checkRole(["admin"]), hotelController.getAllHotels);
// Get hotels by nearest location (lat, long, maxDistance as query params)
router.get("/hotel/nearest", hotelController.getHotelsByNearest);

router.get("/hotel/:id", hotelController.getHotelConroller);


// Get hotels by city (city name as a route param)
router.get("/hotel/city/:city", hotelController.getHotelsByCity);

module.exports = router;
