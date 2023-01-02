import { Group, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { FC } from "react";
import { Link } from "../@types/Link";
import { getThemedColor } from "../utils/getThemedColor";

export const LinkCard: FC<{ link: Link }> = ({ link }) => {
  const theme = useMantineTheme();

  return (
    <Paper
      p="md"
      shadow="md"
      radius="lg"
      sx={{
        backgroundColor: getThemedColor({
          theme: theme,
          color: "main",
          darkDim: 8,
          lightDim: 1,
        }),
        ":hover": {
          backgroundColor: getThemedColor({
            theme: theme,
            color: "cyan",
            darkDim: 9,
            lightDim: 2,
          }),
        },
      }}
      component="a"
      href={link.href}
      target="_blank"
      rel="noreferrer"
    >
      <Group spacing={2} c={link.color}>
        {link.icon}
        <Title order={2}>{link.name}</Title>
      </Group>
      <Text
        mt="xs"
        size="sm"
        sx={{
          whiteSpace: "pre-wrap",
        }}
      >
        {link.comment}
      </Text>
    </Paper>
  );
};
