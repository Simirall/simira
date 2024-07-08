import { Container, Paper, Text, Title } from "@mantine/core";
import { DesktopTower, PaintBrush } from "@phosphor-icons/react";
import { useThemedValue } from "../utils/useThemedColor";

export const Introduction = () => {
  const { getThemedColor } = useThemedValue();

  return (
    <Container size="xs">
      <Paper
        p="xl"
        radius="md"
        shadow="md"
        bg={getThemedColor({
          darkColorSet: "dark",
          darkDim: 6,
          lightColorSet: "main",
          lightDim: 0,
        })}
      >
        <Title
          order={1}
          c={getThemedColor({
            color: "primary",
            darkDim: 4,
            lightDim: 6,
          })}
        >
          しみらー
        </Title>
        <Text>といいます。</Text>
        <Text>
          <Text
            component="span"
            mx="xs"
            c={getThemedColor({
              color: "cyan",
              darkDim: 4,
              lightDim: 6,
            })}
          >
            <PaintBrush
              size={20}
              style={{
                verticalAlign: "-0.2em",
              }}
            />
            イラスト
          </Text>
          や
          <Text
            component="span"
            mx="xs"
            c={getThemedColor({
              color: "lime",
              darkDim: 4,
              lightDim: 6,
            })}
          >
            <DesktopTower
              size={20}
              style={{
                verticalAlign: "-0.2em",
                marginRight: "0.2em",
              }}
            />
            Web開発
          </Text>
          をやったりすることもありますが、あんまりやっていません。
        </Text>
      </Paper>
    </Container>
  );
};
