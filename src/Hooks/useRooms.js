import { useCallback } from "react";
import axiosClient from "../Api/AxiosClient";

export default function useRooms() {
  // Get rooms
  const fetchRooms = useCallback(async (page = 1, size = 20) => {
    try {
      const res = await axiosClient.get(
        `/api/v0/admin/rooms?page=${page}&size=${size}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data.data;
    } catch (error) {
      console.error("Error fetching rooms:", error.response || error);
      throw error;
    }
  }, []);

  // Delete room
  const deleteRoom = useCallback(async (roomId) => {
    try {
      const res = await axiosClient.delete(
        `/api/v0/admin/rooms/${roomId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error("Error deleting room:", error.response || error);
      throw error;
    }
  }, []);

  return { fetchRooms, deleteRoom };
}
