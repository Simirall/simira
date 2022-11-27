import { Box } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Section1 } from "./pages/Section1";
import { Section2 } from "./pages/Section2";
import { Section3 } from "./pages/Section3";

export const Page = () => {
  return (
    <Box
      mih="100vh"
      display="flex"
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section1 />
                <Section2 />
                <Section3 />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};
