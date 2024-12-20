import { Box } from "@mui/material";
import { ReactNode } from "react";


export interface PageContainerProps {
  children: ReactNode,
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {children}
    </Box>
  )
}
