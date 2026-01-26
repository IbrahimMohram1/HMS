import { toast } from "react-toastify";
import axiosClient from "../Utils/AxiosClient";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();

  const register = async (data) => {
    const formData = new FormData();
    // Append text fields
    formData.append("userName", data.userName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("country", data.country);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("role", data.role);

    // Append profile image (file)
    if (data.profileImage && data.profileImage[0]) {
      formData.append("profileImage", data.profileImage[0]);
    }

    try {
      const response = await axiosClient.post("/api/v0/portal/users", formData);
      console.log(response);
      toast.success(response?.data?.message || "Registration successful");
      navigate("/"); // Navigate to login
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed");
    }
  };

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

  return { register, login, forgetPassword, resetPassword };
}
