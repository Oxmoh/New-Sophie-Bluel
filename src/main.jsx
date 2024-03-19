import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Home";
import ErrorPage from "./error-page";
import { Link } from "react-router-dom";
import header from './components/header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
