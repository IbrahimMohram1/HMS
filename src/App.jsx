import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthLayout from "./Shared/AuthLayout/AuthLayout";
import NotFound from "./Shared/NotFound/NotFound";
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  let routes = createHashRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [],
    },
  ]);

  return (
    <>
      <h2>Hellllllllo</h2>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
