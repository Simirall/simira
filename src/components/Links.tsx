import { Container, Group, Paper, Stack, Text, Title } from "@mantine/core";
import type { Link } from "../@types/Link";
import { profileLinks } from "../consts/profileLinks";
import { useThemedValue } from "../utils/useThemedColor";

import classes from "./style/Links.module.scss";

export const Links = () => {
  return (
    <Container>
      <Stack gap="xl">
        <Title mx="auto">Links</Title>
        <Group justify="center" gap="lg">
          {profileLinks.map((link) => (
            <LinkCard {...link} key={link.name} />
          ))}
        </Group>
      </Stack>
    </Container>
  );
};

const LinkCard = (link: Link) => {
  const { getThemedColor, getThemedValue } = useThemedValue();

  return (
    <Paper
      className={getThemedValue({ darkValue: classes.dark, lightValue: classes.light })}
      p="md"
      shadow="md"
      radius="lg"
      component="a"
      href={link.href}
      target="_blank"
      rel="noreferrer"
      bg={getThemedColor({
        darkDim: 8,
        lightDim: 1,
      })}
    >
      <Group c={link.color} gap="0.4rem" align="end">
        {link.icon}
        <Title order={2}>{link.name}</Title>
      </Group>
      <Text
        c={getThemedColor({
          darkDim: 2,
          lightDim: 8,
        })}
        mt="xs"
        size="sm"
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {link.comment}
      </Text>
    </Paper>
  );
};
