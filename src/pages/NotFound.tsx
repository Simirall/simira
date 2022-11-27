import { Container, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { PawPrint } from "phosphor-react";
import { getThemedColor } from "../utils/getThemedColor";

export const NotFound = () => {
  const theme = useMantineTheme();

  return (
    <Container
      size="xs"
      display="flex"
      sx={{
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <Paper
        p="xl"
        shadow="sm"
        radius="lg"
        sx={{
          backgroundColor: getThemedColor({
            theme: theme,
            darkColor: "dark",
            darkDim: 6,
            lightColor: "main",
            lightDim: 0,
          }),
          textAlign: "center",
        }}
      >
        <Title
          order={1}
          size="4rem"
          color={getThemedColor({
            theme: theme,
            color: "primary",
            darkDim: 4,
            lightDim: 5,
          })}
        >
          404
        </Title>
        <Text>
          このページを取得することができなかったということが取得できたんじゃ。
          <PawPrint
            weight="fill"
            size={24}
            color={getThemedColor({
              theme: theme,
              color: "orange",
              darkDim: 3,
              lightDim: 5,
            })}
            style={{
              transform: "rotate(30deg)",
              verticalAlign: "middle",
            }}
          />
        </Text>
      </Paper>
    </Container>
  );
};
