import { Center, useMantineTheme } from "@mantine/core";

export const Footer = () => {
  const theme = useMantineTheme();
  const now = new Date(Date.now());
  return (
    <Center
      py="xl"
      sx={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.main[9]
            : theme.colors.main[0],
        display: "flex",
        alignItems: "center",
        ":before, :after": {
          content: '""',
          flexGrow: 1,
          borderTopWidth: "1px",
          borderTopStyle: "dashed",
          borderTopColor: theme.colors.primary[4],
          marginInline: "2vw",
        },
      }}
    >
      © {now.getFullYear()} しみらー
    </Center>
  );
};
