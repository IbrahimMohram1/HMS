import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Box, Grid, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { PieChart } from "@mui/x-charts/PieChart";
export default function Dashboard() {
  let { logout } = useAuth();
  const data = [
    { label: "Group A", value: 400, color: "#0088FE" },
    { label: "Group B", value: 300, color: "#00C49F" },
    { label: "Group C", value: 300, color: "#FFBB28" },
    { label: "Group D", value: 200, color: "#FF8042" },
  ];

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "auto" }}>
        <Grid container spacing={3} sx={{ gap: 15, justifyContent: "center" }}>
          <Grid
            sx={{
              backgroundColor: "#1A1B1E",
              color: "#fff",
            }}
            item
            xs={12}
            md={4}
            p={3}
            borderRadius={2}
          >
            <Box
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 15,
              }}
            >
              <Typography size={6} variant="h5" component="div">
                100
                <Typography sx={{ mt: 1 }} variant="body2">
                  Rooms
                </Typography>
              </Typography>
              <Typography size={6} variant="body2">
                <WorkIcon />
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#1A1B1E",
              color: "#fff",
            }}
            item
            xs={12}
            md={4}
            p={3}
            borderRadius={2}
          >
            <Box
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 15,
              }}
            >
              <Typography size={6} variant="h5" component="div">
                100
                <Typography sx={{ mt: 1 }} variant="body2">
                  Rooms
                </Typography>
              </Typography>
              <Typography size={6} variant="body2">
                <WorkIcon />
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#1A1B1E",
              color: "#fff",
            }}
            item
            xs={12}
            md={4}
            p={3}
            borderRadius={2}
          >
            <Box
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 15,
              }}
            >
              <Typography size={6} variant="h5" component="div">
                100
                <Typography sx={{ mt: 1 }} variant="body2">
                  Rooms
                </Typography>
              </Typography>
              <Typography size={6} variant="body2">
                <WorkIcon />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, margin: "auto", mt: 25 }}>
        <Grid
          container
          spacing={2}
          sx={{ gap: 15, justifyContent: "center", mt: 5 }}
        >
          <PieChart
            size={{ xs: 12, md: 6 }}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                ],
              },
            ]}
            width={200}
            height={200}
          />
          <PieChart
            slotProps={{
              legend: {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                },
                direction: "horizontal",
                position: {
                  vertical: "bottom",
                  horizontal: "center",
                },
              },
            }}
            size={{ xs: 12, md: 6 }}
            series={[
              {
                data: [
                  { id: 0, value: 25, label: "User", color: "#54D14D" },
                  { id: 1, value: 10, label: "Admin", color: "#35C2FD" },
                ],
              },
            ]}
            width={200}
            height={200}
          />
        </Grid>
      </Box>
    </>
  );
}
