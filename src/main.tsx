import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppRouter } from "./router";
import { theme } from "./material/theme";
import 'src/styles/global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { MultiLangProvider } from "./lib/multilang/multilangProvider";
import { mlang } from "src/lang";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MultiLangProvider mlang={mlang}>
        <AppRouter />
      </MultiLangProvider >
    </ThemeProvider>
  </React.StrictMode>,
);
