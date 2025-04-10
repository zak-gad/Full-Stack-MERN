const Hotel = require("./hotel.schema");

/**
 * Insert a new hotel
 */
const insertHotel = async (hotelData) => {
  try {

    const hotel = new Hotel(hotelData);
    await hotel.save();
    return { success: true, message: "Hotel added successfully", hotel };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Delete a hotel by ID
 */
const deleteHotel = async (id) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(id);
    if (!hotel) return { success: false, message: "Hotel not found" };
    return { success: true, message: "Hotel deleted successfully" };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Update a hotel by ID
 */
const updateHotel = async (id, hotelData) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(id, hotelData, { new: true });
    if (!hotel) return { success: false, message: "Hotel not found" };
    return { success: true, message: "Hotel updated successfully", hotel };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Get all hotels
 */
const getAllHotels = async () => {
  try {
    const hotels = await Hotel.find();
    return { success: true, hotels };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// get detailes hotel by id
const getHotel = async (id) => {
  try {
    const hotel = await Hotel.findById(id);
    return { success: true, hotel };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Get hotels by nearest location
 */
const getHotelsByNearest = async (lat, long) => {
  try {
    const hotels = await Hotel.find({
      "location.lat": { $gte: lat - 5000, $lte: lat + 5000 },
      "location.long": { $gte: long - 5000, $lte: long + 5000 },
    });

    return { success: true, hotels };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Get hotels by city
 */
const getHotelsByCity = async (city) => {
  try {
    const hotels = await Hotel.find({ city });
    return { success: true, hotels };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = {
  insertHotel,
  deleteHotel,
  updateHotel,
  getAllHotels,
  getHotel,
  getHotelsByNearest,
  getHotelsByCity,
};
