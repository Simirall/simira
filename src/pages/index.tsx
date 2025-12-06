
import { InfoCard } from "./_components/InfoCard";
import { ProfileCard } from "./_components/ProfileCard";
import { Timelines } from "./_components/Timelines";

export default async function HomePage() {
  return (
    <div className="h-[300vh]">
      <title>Simirall</title>
      <div className="flex flex-col items-center justify-center gap-y-60 py-48">
        <ProfileCard />
        <InfoCard />
        <Timelines />
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
