//import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  }
])

export function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
} 
