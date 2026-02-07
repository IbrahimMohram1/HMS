// src/Hooks/useDashboard.js
import { useState, useEffect } from "react";
import axiosClient from "../Api/AxiosClient.js";

export default function useDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      setLoading(true);
      try {
        const res = await axiosClient.get("/api/v0/admin/dashboard");
        if (res.data.success) {
          setData(res.data.data);
        } else {
          setError("Failed to fetch dashboard data");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { data, loading, error };
}
