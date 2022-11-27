import {
  Avatar,
  Box,
  Center,
  Container,
  Group,
  Indicator,
  Paper,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import AvatarPath from "../assets/avatar.jpg";
import { getThemedColor } from "../utils/getThemedColor";
import { useUser } from "../utils/useUser";

export const ProfileCard = () => {
  const { data } = useUser();
  const theme = useMantineTheme();
  return (
    <Container
      size="xs"
      py="24rem"
      sx={{
        height: "160vh",
      }}
    >
      <Paper
        shadow="sm"
        p="md"
        sx={{
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.main[8] + "66"
              : theme.colors.main[2] + "55",
          backdropFilter:
            theme.colorScheme === "dark"
              ? "blur(4px) brightness(1.1) contrast(1.5)"
              : "blur(4px) brightness(0.8) contrast(2)",
        }}
      >
        <Group>
          <Indicator
            position="bottom-end"
            size={18}
            offset={8}
            withBorder
            color={
              data?.onlineStatus === "online"
                ? "blue"
                : data?.onlineStatus === "active"
                ? "yellow"
                : data?.onlineStatus === "offline"
                ? "red"
                : "gray"
            }
            sx={{
              "> .mantine-Indicator-indicator": {
                borderColor: theme.colors.primary[2],
              },
            }}
          >
            <Avatar
              src={AvatarPath}
              size="xl"
              sx={{
                borderWidth: "0.4rem",
                borderColor: getThemedColor({
                  theme: theme,
                  color: "main",
                  darkDim: 6,
                  lightDim: 3,
                }),
                borderStyle: "outset",
                borderRadius: "100%",
              }}
            />
          </Indicator>
          <Box>
            <Title
              order={1}
              color={getThemedColor({
                theme: theme,
                color: "main",
                darkDim: 4,
                lightDim: 8,
              })}
            >
              しみらー
            </Title>
            <Text
              pl="xs"
              color={getThemedColor({
                theme: theme,
                color: "gray",
                darkDim: 5,
                lightDim: 8,
              })}
            >
              @Simirall
            </Text>
          </Box>
        </Group>
        <Center>
          <Text>SNSとWebとイラスト。</Text>
        </Center>
      </Paper>
    </Container>
  );
};
