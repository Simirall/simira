import { Container, Group, Title, useMantineTheme } from "@mantine/core";
import { LinkCard } from "../components/LinkCard";
import { getThemedColor } from "../utils/getThemedColor";
import { profileLinks } from "../utils/profileLinks";

export const Section4 = () => {
  const theme = useMantineTheme();

  return (
    <Container size="sm" my="10rem">
      <Title
        order={1}
        sx={{
          textAlign: "center",
        }}
        color={getThemedColor({
          theme: theme,
          color: "primary",
          darkDim: 4,
          lightDim: 6,
        })}
      >
        Links
      </Title>
      <Group mt="md" position="center" spacing="xl">
        {profileLinks.map((link) => (
          <LinkCard link={link} key={link.href} />
        ))}
      </Group>
    </Container>
  );
};
