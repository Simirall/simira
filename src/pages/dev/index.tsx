import { Title } from "../../_common/Title";
import { Timelines } from "./_components/Timelines";

export default async function AboutPage() {
  return (
    <>
      <title>Dev - Simirall</title>
      <Title>My Development</Title>
      <Timelines />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
