import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthLayout from "./Shared/AuthLayout/AuthLayout";
import NotFound from "./Shared/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./AuthModule/Components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./AuthModule/Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./AuthModule/Components/ResetPassword/ResetPassword";
import ChangePassword from "./AuthModule/Components/ChangePassword/ChangePassword";
import Dashboard from "./DashboardModule/Components/Dashboard/Dashboard";
import Register from "./AuthModule/Components/Register/Register";
import DashboardLayout from "./Shared/DashboardLayout/DashboardLayout";
import BookingList from "./DashboardModule/Components/BookingList/BookingList";
import AdminProtectedRoute from "./Shared/AdminProtectedRoute/AdminProtectedRoute";
import { AuthContextProvider } from "./Context/AuthContext";
import UsersList from "./UsersModule/Components/Users/UsersList/UsersList";
import Rooms from "./RoomsModule/Components/Rooms/Rooms";
import RoomsData from "./RoomsModule/RoomsData/RoomsData";
import FacilityList from "./FacilityModule/Components/FacilityList/FacilityList";
import AdsList from "./ADSModule/Components/ADSList/ADSList";
import UserLayout from "./Shared/UserLayout/UserLayout";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgetpass", element: <ForgetPassword /> },
        { path: "resetpass", element: <ResetPassword /> },
        { path: "changepass", element: <ChangePassword /> },
        { path: "dashboard", element: <Dashboard /> },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <AdminProtectedRoute allowedRoles={["admin"]}>
          <DashboardLayout />
        </AdminProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "booking",
          element: <BookingList />,
        },
        { path: "users", element: <UsersList /> },
        { path: "rooms", element: <Rooms /> },
        { path: "rooms-data", element: <RoomsData /> },
        {
          path: "rooms-data/:roomId",
          element: <RoomsData />,
        },
        {
          path: "facility",
          element: <FacilityList />,
        },
        {
          path: "ads",
          element: <AdsList />,
        },
      ],
    },
    {
      path: "/home",
      element: <UserLayout />,
      children: [],
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick={false}
          rtl={false}
          draggable
          pauseOnHover
          theme="colored"
        />
        <RouterProvider router={routes}></RouterProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
