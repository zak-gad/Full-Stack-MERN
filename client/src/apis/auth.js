import { baseURL } from "./baseurl";


import { toast } from "react-toastify";

export const SignUp = async (name, email, phone, password) => {
  try {
    const response = await baseURL.post("/signup", { name, email, phone, password });
    toast.success("Signup successful!");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Signup failed!");
    console.error(error);
    return null;
  }
};

export const CheckCode = async (email, code) => {
  try {
    const response = await baseURL.post("/check-code", { email, code });
    toast.success("Code verified successfully!");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to verify code.");
    console.error(error);
    return null;
  }
};

export const login = async (email, password) => {
  try {
    const response = await baseURL.post("/login", { email, password });
    toast.success("Login successful!");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed!");
    console.error(error);
    return null;
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await baseURL.post("/forgot-password", { email });
    toast.success("Password reset email sent!");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to send password reset email.");
    console.error(error);
    return null;
  }
};

export const changePassword = async (email, newPassword) => {
  try {
    const response = await baseURL.post("/change-password", { email, newPassword });
    toast.success("Password changed successfully!");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to change password.");
    console.error(error);
    return null;
  }
};
