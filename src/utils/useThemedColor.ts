import { type MantineColorShade, type MantineThemeColors, useMantineColorScheme, useMantineTheme } from "@mantine/core";

type ThemedColorProps = {
  color?: keyof MantineThemeColors;
  darkColorSet?: keyof MantineThemeColors;
  darkDim: MantineColorShade;
  lightColorSet?: keyof MantineThemeColors;
  lightDim: MantineColorShade;
};

type ThemedValueProps = {
  darkValue: string;
  lightValue: string;
};

/**
 * ダークモードとライトモードで切り替わる色を楽に取得するgetThemedColorを返すhook
 */
export const useThemedValue = () => {
  const { colorScheme } = useMantineColorScheme();
  const { colors } = useMantineTheme();

  const getThemedColor = (props: ThemedColorProps) => {
    return colorScheme === "dark"
      ? colors[props.color ?? props.darkColorSet ?? "main"][props.darkDim]
      : colors[props.color ?? props.lightColorSet ?? "main"][props.lightDim];
  };

  const getThemedValue = (props: ThemedValueProps) => {
    return colorScheme === "dark" ? props.darkValue : props.lightValue;
  };

  return { getThemedColor, getThemedValue };
};
