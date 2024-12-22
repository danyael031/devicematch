//import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "../pages/Main";
import { Layout } from "src/layout/Layout";
import { SettingsPage } from "src/pages/Settings";
import { DevicesPage } from "src/pages/Devices";
import { CompatibilitiesPage } from "src/pages/Compatibilities";
import { CategoriesPage } from "src/pages/Categories";
import { AboutPage } from "src/pages/About";
import { BrandsPage } from "src/pages/Brands";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: MainPage
      },
      {
        path: '/devices',
        Component: DevicesPage
      },
      {
        path: '/compatibilities',
        Component: CompatibilitiesPage
      },
      {
        path: '/categories',
        Component: CategoriesPage
      },

      {
        path: '/brands',
        Component: BrandsPage
      },
      {
        path: '/settings',
        Component: SettingsPage
      },
      {
        path: '/about',
        Component: AboutPage
      },
    ]
  }
])

export function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
} 
