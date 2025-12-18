import { Link } from "waku";

export default async function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-md">
      <div className="bg-linear-to-r from-teal-300 to-sky-400 bg-clip-text text-8xl text-transparent">
        Not Found
      </div>
      <Link
        className="hover:-translate-y-1 rounded-full bg-sky-300 px-8 py-3 font-bold text-white transition-all hover:bg-sky-400 active:translate-y-0 dark:bg-sky-500 dark:hover:bg-sky-400"
        to="/"
      >
        Back Home
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
