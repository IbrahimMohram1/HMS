import { toast } from "react-toastify";
import axiosClient from "../Utils/AxiosClient";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();

  // ----------------- Login -----------------
  const login = async (data) => {
    try {
      const response = await axiosClient.post("/api/v0/portal/users/login", data);
      const { token, user } = response.data.data;

      localStorage.setItem("access_token", token);
      localStorage.setItem("user", JSON.stringify(user));
console.log(localStorage.getItem("access_token"));

      toast.success(response.data.message || "Login successful");
      navigate("/dashboard");

      return user;
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      throw err;
    }
  };

  // ----------------- Logout -----------------
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    toast.info("Logged out successfully");
    navigate("/login");
  };

  // ----------------- Forget Password -----------------
  const forgetPassword = async (data) => {
    try {
      const response = await axiosClient.post("/api/v0/portal/users/forgot-password", data);
      toast.success(response.data.message || "Password reset email sent");
      return response;
    } catch (err) {
      toast.error(err.response?.data?.message || "Password reset failed");
      throw err;
    }
  };

  // ----------------- Reset Password -----------------
  const resetPassword = async (data) => {
    try {
      const response = await axiosClient.post("/api/v0/portal/users/reset-password", data);
      toast.success(response.data.message || "Password has been reset");
      return response;
    } catch (err) {
      toast.error(err.response?.data?.message || "Password reset failed");
      throw err;
    }
  };

  // ----------------- Change Password -----------------
  const changePassword = async (data) => {
    try {
      const res = await axiosClient.post("/api/v0/portal/users/change-password", data);
      toast.success(res?.data?.message || "Password changed successfully");
      console.log("Password change response:", res.data.message);
      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change password!");
      throw err;
    }
  };

  return { login, logout, forgetPassword, resetPassword, changePassword };
}
