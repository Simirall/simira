export default async function HomePage() {
  return (
    <div className="h-[300vh]">
      <title>Simirall</title>
      test
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
