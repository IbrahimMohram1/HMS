import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function Dashboard() {
  let { logout } = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <Button variant="contained" component={Link} to="/changepass">
        Change Password
      </Button>

      <Button
        variant="contained"
        onClick={logout}
        style={{ marginLeft: "10px" }}
      >
        Logout
      </Button>
    </>
  );
}
