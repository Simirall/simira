import type { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  primaryColor: "primary",
  primaryShade: 7,
  fontFamily: "'Zen Maru Gothic', sans-serif",
  components: {
    Text: {
      defaultProps: {
        size: "lg",
      },
    },
  },
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
};
