import { ProfileCard } from "./_components/ProfileCard";

export default async function HomePage() {
  return (
    <div>
      <title>Simirall</title>
      <ProfileCard />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
