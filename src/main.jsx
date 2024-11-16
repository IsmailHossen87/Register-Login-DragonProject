import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routers from "./Components/Routers/Routers.jsx";
import "./index.css";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
