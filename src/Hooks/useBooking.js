import { useState } from "react";
import { set } from "react-hook-form";
import axiosClient from "../Api/AxiosClient";

export const useBookingApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [bookingId, setBookingId] = useState(null);

  const [totalCount, setTotalCount] = useState(0);
  const getBookings = async () => {
    try {
      setLoading(true);
      const { data } = await axiosClient.get(
        `/api/v0/admin/booking?page=1&size=10`,
      );
      setData(data.data);
      setTotalCount(data.data.totalCount);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching bookings:", error.message);
    }
  };
  const createBooking = async (data) => {
    try {
      const response = await axiosClient.post(`/api/v0/portal/booking`, data);
      setBookingId(response.data.data.booking._id);
      console.log(response.data.data.booking._id);
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, data, getBookings, totalCount, createBooking, bookingId };
};
