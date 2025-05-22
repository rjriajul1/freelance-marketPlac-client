import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './App.css'
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
          <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
