import { Link } from "waku";

export const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 bg-sky-200 px-4 py-2 text-3xl md:gap-x-24 md:text-2xl dark:bg-sky-700">
      <Link to="/">Top</Link>
      <Link to="/about">About</Link>
      <Link to="/dev">Dev</Link>
      <Link to="/illust">Illust</Link>
      <Link to="/links">Links</Link>
    </nav>
  );
};
