import { BackgroundImage, Box, Center, useMantineTheme } from "@mantine/core";
import { useThemedValue } from "../utils/useThemedColor";

import sky from "../assets/sky1.jpg";

export const Footer = () => {
  const { getThemedColor, getThemedValue } = useThemedValue();
  const { colors } = useMantineTheme();
  const now = new Date(Date.now());

  return (
    <Box>
      <BackgroundImage src={sky} bgp="bottom center">
        <Center
          py="lg"
          fz="lg"
          c={getThemedColor({
            darkDim: 2,
            lightDim: 8,
          })}
          bg={getThemedValue({
            darkValue: `${colors.main[8]}cc`,
            lightValue: `${colors.main[2]}cc`,
          })}
          style={{
            backdropFilter: getThemedValue({
              darkValue: "blur(4px) brightness(1.1) contrast(1.5)",
              lightValue: "blur(4px) brightness(0.8) contrast(2)",
            }),
          }}
        >
          © {now.getFullYear()} しみらー
        </Center>
      </BackgroundImage>
    </Box>
  );
};
