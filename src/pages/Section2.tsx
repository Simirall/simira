import {
  Button,
  Container,
  Group,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Repeat } from "phosphor-react";
import { useMemo, useState } from "react";
import { getWhatKindOfSimira } from "../utils/getWhatKindOfSimira";

export const Section2 = () => {
  const theme = useMantineTheme();
  const [_, reRender] = useState(true);
  const greetihg = useMemo(() => getGreeting(), []);
  const kind = useMemo(() => getWhatKindOfSimira(), [_]);

  return (
    <Container size="sm">
      <Paper
        p="xl"
        my="10rem"
        shadow="md"
        sx={{
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.main[8]
              : theme.colors.main[1],
          whiteSpace: "pre-wrap",
        }}
      >
        <Group position="apart" noWrap>
          <Text
            sx={{
              display: "block",
            }}
          >
            {greetihg}
            {kind}しみらーです。
          </Text>
          <Button
            variant="subtle"
            color="primary"
            onClick={() => reRender(!_)}
            p="0.4rem"
            radius="xl"
            sx={{
              height: "fit-content",
            }}
          >
            <Repeat size={24} weight="bold" />
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};

const getGreeting = () => {
  const now = new Date(Date.now());
  return now.getHours() === 0 || now.getHours() < 5 || now.getHours() > 17
    ? "こんばんは。"
    : now.getHours() < 11
    ? "おはようございます。"
    : "こんにちは。";
};
