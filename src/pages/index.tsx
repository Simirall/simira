import { InfoCard } from "./_components/InfoCard";
import { Links } from "./_components/Links";
import { Mirai } from "./_components/Mirai";
import { ProfileCard } from "./_components/ProfileCard";
import { Timelines } from "./_components/Timelines";

export default async function HomePage() {
  return (
    <div>
      <title>Simirall</title>
      <div className="flex flex-col items-center justify-center gap-y-24 py-24 sm:gap-y-60 sm:py-48">
        <ProfileCard />
        <div className="flex flex-wrap items-center justify-center gap-8">
          <InfoCard />
          <Mirai />
        </div>
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
