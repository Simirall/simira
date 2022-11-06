import {
  Button,
  Group,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { MoonStars, Sun } from "phosphor-react";

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Group
      position="apart"
      py="xs"
      px="md"
      sx={{
        position: "fixed",
        zIndex: 10,
        width: "100%",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.main[8] + "cc"
            : theme.colors.main[2] + "cc",
        backdropFilter:
          theme.colorScheme === "dark"
            ? "blur(4px) brightness(1.1) contrast(1.5)"
            : "blur(4px) brightness(0.8) contrast(2)",
      }}
    >
      <Title order={1}>しみしみ</Title>
      <Button
        onClick={() => toggleColorScheme()}
        variant="subtle"
        color="yellow"
        radius="xl"
        sx={{
          aspectRatio: "1",
          padding: "0",
        }}
      >
        {colorScheme === "light" ? (
          <MoonStars
            size="1.6rem"
            weight="fill"
          />
        ) : (
          <Sun
            size="1.6rem"
            weight="fill"
          />
        )}
      </Button>
    </Group>
  );
};
