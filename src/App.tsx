import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
} from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";

export default function App() {
  const preferred = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

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
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <Text>Welcome to Mantine!</Text>
        <button onClick={() => toggleColorScheme()}>OMG</button>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
