import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthLayout from "./Shared/AuthLayout/AuthLayout";
import NotFound from "./Shared/NotFound/NotFound";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./AuthModule/Components/Login/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let routes = createHashRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {index: true, element: <Login />},
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
