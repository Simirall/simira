import { Title } from "../../_common/Title";
import { InfoCard } from "./_components/InfoCard";

export default async function AboutPage() {
  return (
    <>
      <title>About - Simirall</title>
      <Title>About Simirall</Title>
      <InfoCard />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
