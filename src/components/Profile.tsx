import {
  Avatar,
  Box,
  Center,
  Container,
  Group,
  Indicator,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { ShootingStar } from "@phosphor-icons/react";
import { useThemedValue } from "../utils/useThemedColor";
import { useUser } from "../utils/useUser";

export const Profile = () => {
  const { data } = useUser();
  const { colors } = useMantineTheme();
  const { getThemedColor, getThemedValue } = useThemedValue();

  return (
    <Container size="xs">
      <Paper
        shadow="sm"
        p="md"
        bg={getThemedValue({
          darkValue: `${colors.main[8]}66`,
          lightValue: `${colors.main[2]}55`,
        })}
        style={{
          backdropFilter: getThemedValue({
            darkValue: "blur(4px) brightness(1.05) contrast(1.5)",
            lightValue: "blur(4px) brightness(0.85) contrast(2)",
          }),
        }}
      >
        <Stack gap="xs">
          <Group>
            <Indicator
              withBorder
              position="bottom-end"
              size={18}
              offset={8}
              color={
                data?.onlineStatus === "online"
                  ? "blue"
                  : data?.onlineStatus === "active"
                    ? "yellow"
                    : data?.onlineStatus === "offline"
                      ? "red"
                      : "gray"
              }
              styles={{
                indicator: {
                  borderColor: colors.primary[2],
                },
              }}
            >
              <Avatar
                radius="100%"
                size="xl"
                style={{
                  borderWidth: "0.4rem",
                  borderColor: getThemedColor({
                    color: "main",
                    darkDim: 6,
                    lightDim: 3,
                  }),
                  borderStyle: "outset",
                }}
                src={data?.avatarUrl}
              >
                <ShootingStar size={64} color="#f3ba59" weight="duotone" />
              </Avatar>
            </Indicator>
            <Box>
              <Title
                order={1}
                c={getThemedColor({
                  darkDim: 4,
                  lightDim: 8,
                })}
              >
                しみらー
              </Title>
              <Text
                pl="xs"
                c={getThemedColor({
                  color: "gray",
                  darkDim: 5,
                  lightDim: 7,
                })}
              >
                @Simirall
              </Text>
            </Box>
          </Group>
          <Center>
            <Text
              c={getThemedColor({
                color: "primary",
                darkDim: 2,
                lightDim: 7,
              })}
              fz="lg"
            >
              SNSとWebとイラスト。
            </Text>
          </Center>
        </Stack>
      </Paper>
    </Container>
  );
};
