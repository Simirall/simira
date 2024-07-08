import type { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";

type ExtendedCustomColors = "primary" | "dark" | "main" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
