import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "hidden",
        }}
      >
        <h3>Heeeeeeeeeeelo From User Part</h3>
        <Outlet />
      </Box>
    </>
  );
}
