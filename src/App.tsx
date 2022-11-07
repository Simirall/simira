import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Page } from "./Page";

export const App = () => {
  const preferred = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferred);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    if (colorScheme !== preferred) toggleColorScheme(preferred);
  }, [preferred]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colors: {
            dark: [
              "#CDDFDF",
              "#9BBFBF",
              "#72A5A5",
              "#588989",
              "#476E6E",
              "#395959",
              "#2B4444",
              "#213333",
              "#192727",
              "#131E1E",
            ],
            main: [
              "#EDF8F7",
              "#CCEBE9",
              "#ABDEDA",
              "#8AD1CC",
              "#69C4BD",
              "#48B7AF",
              "#3A928C",
              "#2B6E69",
              "#1D4946",
              "#0E2523",
            ],
            primary: [
              "#E9F3FB",
              "#C2DDF4",
              "#9BC8ED",
              "#74B2E7",
              "#4D9DE0",
              "#2687D9",
              "#1F6CAD",
              "#175182",
              "#0F3657",
              "#081B2B",
            ],
          },
          primaryColor: "main",
          primaryShade: 7,
          colorScheme: colorScheme,
          fontFamily: "'Zen Maru Gothic', sans-serif",
          headings: {
            fontFamily: "'Zen Maru Gothic', sans-serif",
          },
          components: {
            Text: {
              defaultProps: {
                size: "lg",
              },
            },
          },
          globalStyles: (theme) => ({
            ":root": {
              scrollbarWidth: "thin",
              scrollbarColor: `${
                theme.colorScheme === "dark"
                  ? theme.colors.primary[6]
                  : theme.colors.primary[4]
              } ${
                theme.colorScheme === "dark"
                  ? theme.colors.main[9]
                  : theme.colors.main[1]
              }`,
            },
            "::-webkit-scrollbar": {
              width: "0.8rem",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.primary[6]
                  : theme.colors.primary[4],
              border: "3px solid transparent",
              backgroundClip: "content-box",
              borderRadius: "10px",
            },
            "::-webkit-scrollbar-track": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.main[9]
                  : theme.colors.main[1],
            },
            "::selection": {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.primary[6]
                  : theme.colors.primary[3],
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.main[1]
                  : theme.colors.main[9],
            },
            "*": {
              transitionProperty: "color, background-color border-color",
              transitionDuration: "0.2s",
              transitionTimingFunction: "ease-out",
              scrollBehavior: "smooth",
            },
          }),
        }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <Page />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
