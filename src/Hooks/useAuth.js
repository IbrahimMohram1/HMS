import { toast } from "react-toastify";
import axiosClient from "../Utils/AxiosClient";

export default function useAuth() {
  const login = async (data) => {
    try {
      const response = await axiosClient.post(
        "/api/v0/portal/users/login",
        data,
      );

      const { token, user } = response.data.data;

      localStorage.setItem("access_token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(response.data.message || "Login successful");

      return user;
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      throw err;
    }
  };
  const forgetPassword = async (data) => {
    try {
      const response = await axiosClient.post(
        "/api/v0/portal/users/forgot-password",
        data,
      );
      toast.success(response.data.message || "Password reset email sent");
      return response;
    } catch (err) {
      toast.error(err.response?.data?.message || "Password reset failed");
    }
  };
  const resetPassword = async (data) => {
    try {
      const response = await axiosClient.post(
        "/api/v0/portal/users/reset-password",
        data,
      );
      toast.success(response.data.message || "Password has been reset");
      return response;
    } catch (err) {
      toast.error(err.response?.data?.message || "Password reset failed");
    }
  };

  return { login, forgetPassword, resetPassword };
}
