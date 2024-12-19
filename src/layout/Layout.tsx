import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router";
import { AppNavbar } from "src/components/AppNavbar";
import Header from "src/components/Header";
import { SideMenu } from "src/components/SideMenu";

export function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />
      {/* Main content */}
      <Box
        component="main"
        sx={() => ({
          flexGrow: 1,
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          <Outlet />
          {/*<MainGrid />*/}
        </Stack>
      </Box>
    </Box>

  )

}
