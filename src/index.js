import React from "react";
import ReactDOM from "react-dom";
import "./i18n";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
    primary: {
      main: "#9c344c",
      black: "444C58",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
