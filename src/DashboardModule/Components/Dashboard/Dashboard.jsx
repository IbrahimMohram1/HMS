import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Box, Grid, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { PieChart } from "@mui/x-charts/PieChart";
export default function Dashboard() {
  let { logout } = useAuth();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <Grid
            sx={{
              backgroundColor: "#1A1B1E",
              color: "#fff",
            }}
            item
            size={{ xs: 12, md: 4 }}
            p={3}
            borderRadius={2}
          >
            <Box
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
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
            size={{ xs: 12, md: 4 }}
            p={3}
            borderRadius={2}
          >
            <Box
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
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
            size={{ xs: 12, md: 4 }}
            p={3}
            borderRadius={2}
          >
            <Box
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
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
      <Box sx={{ mt: 25 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}
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
                  width: "100%",
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
            sx={{ width: "100%" }}
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
