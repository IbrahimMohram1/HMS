import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthLayout from "./Shared/AuthLayout/AuthLayout";
import NotFound from "./Shared/NotFound/NotFound";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./AuthModule/Components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./AuthModule/Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./AuthModule/Components/ResetPassword/ResetPassword";
import ChangePassword from "./AuthModule/Components/ChangePassword/ChangePassword";
import Dashboard from "./DashboardModule/Dashboard";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
       { path: "forget-pass", element: <ForgetPassword /> },
        { path: "resetpass", element: <ResetPassword /> },
        { path: "changepass", element: <ChangePassword /> },
        { path: "dashboard", element: <Dashboard /> }
      ],
    },
  ]);

  return (
    <>
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
    </>
  );
}

export default App;
