import { Box, Stack } from "@mantine/core";
import { FirstView } from "./components/FirstView";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Links } from "./components/Links";
import { SimiraGasha } from "./components/SimiraGasha";

import "./app.scss";

export const App = () => {
  return (
    <Box
      style={{
        overflow: "hidden",
      }}
    >
      <Header />
      <FirstView />
      <Stack py="16rem" gap="8rem">
        <SimiraGasha />
        <Introduction />
        <Links />
      </Stack>
      <Footer />
    </Box>
  );
};
