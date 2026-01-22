import { Title } from "../../_common/Title";
import { Links } from "./_components/Links";

export default async function LinksPage() {
  return (
    <>
      <title>Links - Simirall</title>
      <Title>Links</Title>
      <Links />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
