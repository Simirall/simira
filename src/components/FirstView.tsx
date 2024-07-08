import { Box } from "@mantine/core";
import { Parallax } from "react-scroll-parallax";
import { Profile } from "./Profile";
import { SkyBox } from "./SkyBox";

export const FirstView = () => {
  return (
    <Box pos="relative" w="100%" h="120vh">
      <SkyBox />
      <Box pos="absolute" top="0" left="0" pt="12rem" w="100%" h="100%">
        <Parallax speed={-30}>
          <Profile />
        </Parallax>
      </Box>
    </Box>
  );
};
