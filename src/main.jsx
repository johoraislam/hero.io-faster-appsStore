import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';


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


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
