import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ParallaxProvider } from "react-scroll-parallax";
import { App } from "./App.tsx";
import { theme } from "./consts/theme.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </MantineProvider>
  </React.StrictMode>,
);
