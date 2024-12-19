//import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { MainPage } from "../pages/Main";
import { Layout } from "src/layout/Layout";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: MainPage
      }
    ]
  }
])

export function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
} 
