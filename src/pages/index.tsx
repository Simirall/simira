import { InfoCard } from "./_components/InfoCard";
import { Links } from "./_components/Links";
import { ProfileCard } from "./_components/ProfileCard";
import { Timelines } from "./_components/Timelines";

export default async function HomePage() {
  return (
    <div>
      <title>Simirall</title>
      <div className="flex flex-col items-center justify-center gap-y-24 py-24 md:gap-y-60 md:py-48">
        <ProfileCard />
        <InfoCard />
        <Timelines />
        <Links />
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
