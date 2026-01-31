import React, { useEffect, useState } from "react";
import axiosClient from "../Api/AxiosClient";
import { toast } from "react-toastify";

export default function useFacilities() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFacilities = async () => {
    setLoading(true);
    try {
      let response = await axiosClient.get(`/api/v0/admin/room-facilities`);
      console.log(response.data.data.facilities);
      setData(response.data.data.facilities);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch facilities");
    } finally {
      setLoading(false);
    }
  };

  const deleteFacility = async (id) => {
    try {
      let response = await axiosClient.delete(
        `/api/v0/admin/room-facilities/${id}`,
      );
      console.log(response);
      toast.success(response.data.message);
      getFacilities();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Error deleting facility");
    }
  };

  const addFacility = async (facilityName) => {
    try {
      let response = await axiosClient.post(`/api/v0/admin/room-facilities`, {
        name: facilityName,
      });
      console.log(response);
      toast.success(response.data.message);
      getFacilities();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Error adding facility");
    }
  };

  useEffect(() => {
    getFacilities();
  }, []);

  return { getFacilities, data, deleteFacility, loading, addFacility };
}
