//import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "../pages/Main";
import { Layout } from "src/layout/Layout";
import { SettingsPage } from "src/pages/Settings";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: MainPage
      },
      {
        path: '/settings',
        Component: SettingsPage
      }
    ]
  }
])

export function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
} 
