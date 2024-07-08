import { AmazonLogo, FediverseLogo, GithubLogo, Palette, ShoppingBagOpen, Sparkle, XLogo } from "@phosphor-icons/react";
import type { Link } from "../@types/Link";

export const profileLinks: ReadonlyArray<Link> = [
  {
    name: "Misskey.io",
    href: "https://misskey.io/@Simirall",
    comment: `メインアカウント。
 Fediverseからどこでもどうぞ`,
    color: "#8abd3a",
    icon: <FediverseLogo weight="duotone" fontSize="1.8rem" />,
  },
  {
    name: "Simirall",
    href: "https://x.com/Simirall",
    comment: "XとかいうSNS始めました",
    color: "#1da1f2",
    icon: <XLogo weight="duotone" fontSize="1.8rem" />,
  },
  {
    name: "Pixiv",
    href: "https://www.pixiv.net/users/33067555",
    comment: "no content?",
    color: "#0096fa",
    icon: <Palette weight="duotone" fontSize="1.8em" />,
  },
  {
    name: "Booth",
    href: "https://simirall.booth.pm",
    comment: "浅石みらいグッズが買えるぞ！",
    color: "#fc4d50",
    icon: <ShoppingBagOpen weight="duotone" fontSize="1.8em" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Simirall",
    comment: "開發",
    color: "#171515",
    icon: <GithubLogo weight="duotone" fontSize="1.8em" />,
  },
  {
    name: "ほしいものリスト",
    href: "https://www.amazon.jp/hz/wishlist/ls/2DR7SDKE3YX2S",
    comment: "そういう日もある",
    color: "#ff9900",
    icon: <AmazonLogo weight="duotone" fontSize="1.8rem" />,
  },
  {
    name: "えらいものリスト",
    href: "https://www.amazon.jp/hz/wishlist/ls/1XY3PGI9T0YSZ",
    comment: `えらいぞ
(ダイレクトマーケティング)`,
    color: "#ff9900",
    icon: <Sparkle weight="duotone" fontSize="1.8rem" />,
  },
];
