import { Link } from "waku";

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="font-bold text-4xl tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link className="mt-4 inline-block underline" to="/">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "About",
    headline: "About Waku",
    body: "The minimal React framework",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
