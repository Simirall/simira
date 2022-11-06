import { Box, Image } from "@mantine/core";
import Sky1 from "../assets/sky1.jpg";
import { ProfileCard } from "../components/ProfileCard";
import { Parallax, Background } from "react-parallax";

export const Section1 = () => {
  return (
    <Parallax strength={300}>
      <Background className="custom-bg">
        <Box
          sx={{
            width: "100vw",
          }}
        >
          <Image
            src={Sky1}
            width="100%"
            height="160vh"
            fit="cover"
            sx={{
              transform: "scale(1.2)",
              filter: "blur(8px) opacity(0.8)",
            }}
          />
        </Box>
      </Background>
      <ProfileCard />
    </Parallax>
  );
};
