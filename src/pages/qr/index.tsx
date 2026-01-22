import { HouseIcon } from "@phosphor-icons/react/dist/ssr";
import { Link } from "waku";

export default async function QRPage() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-8">
      <title>Simirall</title>
      <h1 className="font-light text-3xl">しみらー / Simirall</h1>
      <img
        alt="Home QR"
        className="w-40 rounded-3xl shadow-lg"
        src="/qr.avif"
      />
      <Link to="/">
        <HouseIcon className="text-5xl" weight="fill" />
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
