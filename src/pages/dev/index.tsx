import { Title } from "../../_common/Title";
import { Milistenna } from "./_components/Milistenna";
import { Timelines } from "./_components/Timelines";
import { WebSpeedHackathon2026 } from "./_components/WebSpeedHackathon2026";

export default async function AboutPage() {
  return (
    <>
      <title>Dev - Simirall</title>
      <Title>My Works</Title>
      <div className="justify-center-safe mb-8 flex flex-wrap gap-4">
        <Milistenna />
      </div>
      <Title>Contest</Title>
      <WebSpeedHackathon2026 />
      <Title>My Development History</Title>
      <Timelines />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
