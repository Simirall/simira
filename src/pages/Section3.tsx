import { Container, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { Code, PaintBrush } from "phosphor-react";
import { getThemedColor } from "../utils/getThemedColor";

export const Section3 = () => {
  const theme = useMantineTheme();

  return (
    <Container size="xs">
      <Paper
        p="xl"
        my="10rem"
        shadow="md"
        radius="xl"
        sx={{
          backgroundColor: getThemedColor({
            theme: theme,
            darkColor: "dark",
            darkDim: 6,
            lightColor: "main",
            lightDim: 0,
          }),
        }}
      >
        <Title
          order={1}
          color={getThemedColor({
            theme: theme,
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
            color={getThemedColor({
              theme: theme,
              color: "cyan",
              darkDim: 4,
              lightDim: 6,
            })}
          >
            <PaintBrush
              size={20}
              weight="duotone"
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
            color={getThemedColor({
              theme: theme,
              color: "lime",
              darkDim: 4,
              lightDim: 6,
            })}
          >
            <Code
              size={24}
              style={{
                verticalAlign: "-0.2em",
              }}
            />
            Webサイト
          </Text>
          をやったりすることもありますが、あんまりやっていません。
        </Text>
      </Paper>
    </Container>
  );
};
