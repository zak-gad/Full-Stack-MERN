import axios from 'axios';

const URL= import.meta.env.VITE_API_BASE_URL ||"http://localhost:5001";
const baseURL = axios.create({
  baseURL:`${URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export  {baseURL,URL};
