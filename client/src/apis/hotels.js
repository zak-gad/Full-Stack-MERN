import { baseURL } from "./baseurl";

export const GetHotelsByCity = async (city) => {
  try {
    const result = await baseURL.get(`/hotel/city/${city}`);
    return result.data;
  } catch (error) {
    console.error("Error fetching hotels by city:", error);
    return null; // Return null or an empty array if needed
  }
};

export const GetHotels = async (lat, long) => {
  try {
    const result = await baseURL.get(`/hotel/nearest?lat=${lat}&long=${long}`);
    return result.data;
  } catch (error) {
    console.error("Error fetching nearest hotels:", error);
    return null; // Return null or an empty array if needed
  }
};


export const GetHotelsById = async (id) => {
  try {
    const result = await baseURL.get(`/hotel/${id}`);
    return result.data;
  } catch (error) {
    console.error("Error fetching hotel by ID:", error);
    return null; // Return null to handle errors gracefully
  }
};
