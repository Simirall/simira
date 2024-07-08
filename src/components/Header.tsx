import { ActionIcon, Group, Title, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { useThemedValue } from "../utils/useThemedColor";

export const Header = () => {
  const { colors } = useMantineTheme();
  const { getThemedColor, getThemedValue } = useThemedValue();

  return (
    <Group
      py="xs"
      px="md"
      justify="space-between"
      bg={getThemedValue({
        darkValue: `${colors.main[8]}cc`,
        lightValue: `${colors.main[2]}cc`,
      })}
      pos="fixed"
      w="100%"
      style={{
        zIndex: 10,
        backdropFilter: getThemedValue({
          darkValue: "blur(4px) brightness(1.1) contrast(1.5)",
          lightValue: "blur(4px) brightness(0.8) contrast(2)",
        }),
      }}
    >
      <Title
        order={1}
        c={getThemedColor({
          darkDim: 4,
          lightDim: 8,
        })}
      >
        しみしみ
      </Title>
      <ToggleColorSchemeButton />
    </Group>
  );
};

const ToggleColorSchemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  return (
    <ActionIcon
      variant="subtle"
      color="yellow"
      radius="xl"
      size="xl"
      onClick={() => {
        toggleColorScheme();
      }}
    >
      {colorScheme === "light" ? <MoonStars size="1.6rem" weight="fill" /> : <Sun size="1.6rem" weight="fill" />}
    </ActionIcon>
  );
};
