import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layouts from "./Layouts/Layouts.jsx";
import Home from "./Home.jsx";
import Apps from "./pages/Apps/Apps.jsx";
import Loader from "./components/Loader/Loader.jsx";
import AppDetails from "./pages/AppDetails/AppDetails.jsx";
import Installation from "./pages/Installation/Installation.jsx";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

// ReactRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json"),
        element: <Home />,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        element: <Apps />,
      },
      {
        path: "/app-details/:id",
        loader: () => fetch("/appsData.json"),
        element: <AppDetails />,
      },
      {
        path: "/installation",
        loader: () => fetch("/appsData.json"),
        element: <Installation />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
);
