// src/Pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { PieChart } from "@mui/x-charts/PieChart";

import useRooms from "../../../Hooks/useRooms";
import useFacilities from "../../../Hooks/useFacilities";
import useAds from "../../../Hooks/useAds";
import useUsers from "../../../Hooks/useUsers";
import { useBookingApi } from "../../../Hooks/useBooking";
import useDashboard from "../../../Hooks/useDashboard";

export default function Dashboard() {
  // ================= Hooks =================
  const { fetchRooms } = useRooms();
  const { totalCount: totalFacilities } = useFacilities();
  const { total: totalAds } = useAds();
  const { users = [], loading: usersLoading } = useUsers(0, 1000);
  const { bookings = [], getBookings, loading: bookingsLoading } = useBookingApi();
  const { data: dashboardData, loading: dashboardLoading, error: dashboardError } = useDashboard();

  // ================= State =================
  const [totalRooms, setTotalRooms] = useState(0);
  const [roomsLoading, setRoomsLoading] = useState(true);

  // ================= Rooms Count =================
  useEffect(() => {
    const loadRoomsCount = async () => {
      try {
        const data = await fetchRooms(1, 1);
        setTotalRooms(data?.totalCount || 0);
      } catch (error) {
        console.error(error);
      } finally {
        setRoomsLoading(false);
      }
    };
    loadRoomsCount();
  }, []);

  // ================= Bookings =================
  useEffect(() => {
    getBookings(1, 1000);
  }, []);

  // ================= Loading / Error =================
  if (roomsLoading || bookingsLoading || dashboardLoading) return <p>Loading dashboard...</p>;
  if (dashboardError) return <p>Error: {dashboardError}</p>;

  // ================= Charts Data =================
  const pendingBookings = dashboardData?.bookings?.pending ?? 0;
  const completedBookings = dashboardData?.bookings?.completed ?? 0;
  const userCount = dashboardData?.users?.user ?? 0;
  const adminCount = dashboardData?.users?.admin ?? 0;

  // ================= RENDER =================
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      {/* ================= CARDS ================= */}
     <Grid
          container
          spacing={3}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <Grid
            sx={{ backgroundColor: "#1A1B1E", color: "#fff" }}
            item
            size={{ xs: 12, md: 4 }}
            p={3}
            borderRadius={2}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">
                {totalRooms}
                <Typography sx={{ mt: 1 }} variant="body2">
                  Rooms
                </Typography>
              </Typography>
              <WorkIcon />
            </Box>
          </Grid>

        {/* Facilities Card */}
         <Grid
            sx={{ backgroundColor: "#1A1B1E", color: "#fff" }}
            item
            size={{ xs: 12, md: 4 }}
            p={3}
            borderRadius={2}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">
                {totalFacilities}
                <Typography sx={{ mt: 1 }} variant="body2">
                  Facilities
                </Typography>
              </Typography>
              <WorkIcon />
            </Box>
          </Grid>


        {/* Ads Card */}
        <Grid
            sx={{ backgroundColor: "#1A1B1E", color: "#fff" }}
            item
            size={{ xs: 12, md: 4 }}
            p={3}
            borderRadius={2}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">
                {totalAds}
                <Typography sx={{ mt: 1 }} variant="body2">
                  Ads
                </Typography>
              </Typography>
              <WorkIcon />
            </Box>
          </Grid>
      </Grid>

      {/* ================= PIE CHARTS ================= */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
        {/* Bookings PieChart */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
         
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: pendingBookings, label: "Pending", color: "#FFA500" },
                  { id: 1, value: completedBookings, label: "Completed", color: "#4CAF50" },
                ],
              },
            ]}
            width={250}
            height={250}
          />
        </Grid>

        {/* Users vs Admins PieChart */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: userCount, label: "Users", color: "#4dbdd1" },
                  { id: 1, value: adminCount, label: "Admins", color: "#16207e" },
                ],
              },
            ]}
            width={250}
            height={250}
            slotProps={{
              legend: {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                },
                direction: "horizontal",
                position: { vertical: "bottom", horizontal: "center" },
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
