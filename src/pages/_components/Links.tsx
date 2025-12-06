import {
  AmazonLogoIcon,
  BagSimpleIcon,
  FediverseLogoIcon,
  GithubLogoIcon,
  LinkSimpleIcon,
  PaintBrushIcon,
  SparkleIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactElement } from "react";

type Link = {
  title: string;
  account: string;
  url: string;
  icon: ReactElement;
};

const links: ReadonlyArray<Link> = [
  {
    title: "Fediverse(Misskey.io)",
    account: "@Simirall",
    url: "https://misskey.io/@Simirall",
    icon: <FediverseLogoIcon className="text-3xl" weight="fill" />,
  },
  {
    title: "Twitter(現X)",
    account: "@Simirall",
    url: "https://x.com/Simirall",
    icon: <XLogoIcon className="text-3xl" weight="bold" />,
  },
  {
    title: "Pixiv",
    account: "しみとらす",
    url: "https://www.pixiv.net/users/33067555",
    icon: <PaintBrushIcon className="text-3xl" weight="fill" />,
  },
  {
    title: "Booth",
    account: "浅石みらいグッズが買えるぞ！",
    url: "https://simirall.booth.pm/",
    icon: <BagSimpleIcon className="text-3xl" weight="fill" />,
  },
  {
    title: "GitHub",
    account: "開發",
    url: "https://github.com/Simirall",
    icon: <GithubLogoIcon className="text-3xl" weight="fill" />,
  },
  {
    title: "ほしいものリスト",
    account: "そういう日もある",
    url: "https://www.amazon.jp/hz/wishlist/ls/2DR7SDKE3YX2S",
    icon: <AmazonLogoIcon className="text-3xl" weight="fill" />,
  },
  {
    title: "えらいものリスト",
    account: "おすすめコンテンツ",
    url: "https://www.amazon.jp/hz/wishlist/ls/1XY3PGI9T0YSZ",
    icon: <SparkleIcon className="text-3xl" weight="fill" />,
  },
];

export const Links = () => {
  return (
    <ul className="list w-96 max-w-full rounded-box bg-base-100 shadow-md">
      <li className="p-4 pb-2 text-xs tracking-wide opacity-60">Links</li>

      {links.map((link) => (
        <a
          className="list-row items-center"
          href={link.url}
          key={link.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.icon}
          <div>
            <div> {link.title}</div>
            <div className="text-xs opacity-60">{link.account}</div>
          </div>
          <LinkSimpleIcon className="text-2xl" />
        </a>
      ))}
    </ul>
  );
};
