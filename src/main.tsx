import "@fontsource/rajdhani/700.css";
import "@fontsource-variable/chivo";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
