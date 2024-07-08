import {} from "react-scroll-parallax";

import { Box, Image } from "@mantine/core";
import sky from "../assets/sky1.jpg";

export const SkyBox = () => {
  return (
    <Box
      pos="absolute"
      h="100%"
      w="100%"
      style={{
        overflow: "hidden",
      }}
    >
      <Image
        h="100%"
        w="100%"
        src={sky}
        decoding="async"
        style={{
          transform: "scale(1.2)",
          filter: "blur(8px) opacity(0.8)",
        }}
      />
    </Box>
  );
};
