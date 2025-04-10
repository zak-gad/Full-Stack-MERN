const hotelService = require("./hotel.service");


const insertHotel = async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        throw new Error("Images are required");
      }
  
      // Assign cover image (first image)
      req.body.cover = `/uploads/hotels/${req.files[0].filename}`;
  
      // Assign remaining images to the images array
      req.body.images = req.files.slice(1).map(file => `/uploads/hotels/${file.filename}`);
      req.body.location = {lat:req.body.lat,long:req.body.long}
      const result = await hotelService.insertHotel(req.body);
      res.status(result.success ? 201 : 400).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  
  /**
   * Delete a hotel by ID
   */
  const deleteHotel = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await hotelService.deleteHotel(id);
      res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  /**
   * Update a hotel by ID
   */
  const updateHotel = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            throw new Error("Images are required");
          }
      
          // Assign cover image (first image)
          req.body.cover = `/uploads/hotels/${req.files[0].filename}`;
      
          // Assign remaining images to the images array
          req.body.images = req.files.slice(1).map(file => `/uploads/hotels/${file.filename}`);
          req.body.location = {lat:req.body.lat,long:req.body.long}
      const { id } = req.params;
      const result = await hotelService.updateHotel(id, req.body);
      res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  /**
   * Get all hotels
   */
  const getAllHotels = async (req, res) => {
    try {
      const result = await hotelService.getAllHotels();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

  const getHotelConroller = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await hotelService.getHotel(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  /**
   * Get hotels by nearest location
   */
  const getHotelsByNearest = async (req, res) => {
    try {
      const { lat, long } = req.query;
      const result = await hotelService.getHotelsByNearest(
        parseFloat(lat),
        parseFloat(long)
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  /**
   * Get hotels by city
   */
  const getHotelsByCity = async (req, res) => {
    try {
      const { city } = req.params;
      const result = await hotelService.getHotelsByCity(city);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  module.exports = {
    insertHotel,
    deleteHotel,
    updateHotel,
    getAllHotels,
    getHotelsByNearest,
    getHotelConroller,
    getHotelsByCity,
  };