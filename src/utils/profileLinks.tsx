import { ChatCenteredText, Gift, Palette, TwitterLogo } from "phosphor-react";
import { Link } from "../@types/Link";

export const profileLinks: Array<Link> = [
  {
    name: "Misskey.io",
    href: "https://misskey.io/@Simirall",
    comment: `メインアカウント。
 Fediverseからどこでもどうぞ`,
    color: "#8abd3a",
    icon: <ChatCenteredText weight="fill" fontSize="1.8rem" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Simirall",
    comment: "死",
    color: "#1da1f2",
    icon: <TwitterLogo weight="fill" fontSize="1.8rem" />,
  },
  {
    name: "Pixiv",
    href: "https://www.pixiv.net/users/33067555",
    comment: "no content?",
    color: "#0096fa",
    icon: <Palette weight="duotone" fontSize="1.6em" />,
  },
  {
    name: "ほしいものリスト",
    href: "https://www.amazon.jp/hz/wishlist/ls/2DR7SDKE3YX2S",
    comment: "そういう日もある",
    color: "#ff9900",
    icon: <Gift weight="duotone" fontSize="1.8rem" />,
  },
  {
    name: "えらいものリスト",
    href: "https://www.amazon.jp/hz/wishlist/ls/1XY3PGI9T0YSZ",
    comment: `えらいぞ
(ダイレクトマーケティング)`,
    color: "#ff9900",
    icon: <Gift weight="duotone" fontSize="1.8rem" />,
  },
];
