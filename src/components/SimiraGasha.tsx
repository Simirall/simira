import { ActionIcon, Container, Group, Paper, Text } from "@mantine/core";
import { Repeat } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { getWhatKindOfSimira } from "../utils/getWhatKindOfSimira";
import { useThemedValue } from "../utils/useThemedColor";

export const SimiraGasha = () => {
  const { getThemedColor } = useThemedValue();

  const [_, reRender] = useState(true);
  const greetihg = useMemo(() => getGreeting(), []);
  // biome-ignore lint/correctness/useExhaustiveDependencies: ガチャ
  const kind = useMemo(() => getWhatKindOfSimira(), [_]);

  return (
    <Container size="sm" w="100%">
      <Paper p="lg" shadow="sm" bg={getThemedColor({ darkDim: 8, lightDim: 1 })}>
        <Group justify="space-between" wrap="nowrap">
          <Text>
            {greetihg}
            {kind}
            しみらーです
          </Text>
          <ActionIcon c="primary" variant="light" radius="xl" onClick={() => reRender(!_)}>
            <Repeat weight="bold" />
          </ActionIcon>
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
