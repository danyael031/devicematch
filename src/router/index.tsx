//import React from 'react';
import { createHashRouter, RouterProvider } from "react-router";
import { MainPage } from "../pages/Main";

export const router = createHashRouter([
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
