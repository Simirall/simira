import { Title } from "../../_common/Title";
import { Mirai } from "./_components/Mirai";

export default async function IllustPage() {
  return (
    <>
      <title>Illust - Simirall</title>
      <Title>Illustrations</Title>
      <Mirai />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
