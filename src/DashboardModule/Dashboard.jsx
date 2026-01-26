import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Button
        variant="contained"
        component={Link}   
        to="/changepass"      >
        Change Password
      </Button>
    </>
  );
}
