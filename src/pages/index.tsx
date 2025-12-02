
import { ProfileCard } from "./_components/ProfileCard";

export default async function HomePage() {
  return (
    <div className="h-[300vh]">
      <title>Simirall</title>
      <div className="flex justify-center py-48">
        <ProfileCard />
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
