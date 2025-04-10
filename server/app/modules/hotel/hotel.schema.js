const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
   {
    name: {
        type: String,
        required: [true, "Hotel name is required"],
        trim: true,
      },
    city: {
        type: String,
        required: [true, "Hotel city is required"],
        trim: true,
      },
    stars: {
        type: Number,
        required: [true, "Hotel stars is required"]
      },
      description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
      },
      cover: {
        type: String,
        required: [true, "Cover image is required"],
      },
      images: {
        type: [String],
        default: [],
      },    
      facebook: {
        type: String, // URL to Facebook page
        required: false,
      },
      whatsapp: {
        type: String, // WhatsApp number (as a string to keep leading zeros)
        required: false,
      },
      location: {
        lat: {
          type: Number,
          required: [true, "Latitude is required"],
        },
        long: {
          type: Number,
          required: [true, "Longitude is required"],
        },
      },
   })
   const Hotel = mongoose.model("Hotel", HotelSchema);

   module.exports = Hotel;