import { MantineTheme } from "@mantine/core";

export const getThemedColor = (props: {
  theme: MantineTheme;
  color?: string;
  darkColor?: string;
  darkDim: number;
  lightColor?: string;
  lightDim: number;
}): string => {
  return props.theme.colorScheme === "dark"
    ? props.theme.colors[props.color ?? props.darkColor ?? "main"][
        props.darkDim
      ]
    : props.theme.colors[props.color ?? props.lightColor ?? "main"][
        props.lightDim
      ];
};
