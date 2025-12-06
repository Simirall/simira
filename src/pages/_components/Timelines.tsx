import {
  ArrowsDownUpIcon,
  AtomIcon,
  BedIcon,
  BlueprintIcon,
  BoxArrowUpIcon,
  BrowsersIcon,
  ChatCircleDotsIcon,
  CloudFogIcon,
  ColumnsPlusRightIcon,
  DatabaseIcon,
  DeviceMobileCameraIcon,
  FileTsIcon,
  GithubLogoIcon,
  GradientIcon,
  IdentificationBadgeIcon,
  IslandIcon,
  KeyholeIcon,
  MapPinIcon,
  MonitorPlayIcon,
  MountainsIcon,
  WindIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Timeline, type TimelineItem } from "./Timeline";

const hobby: ReadonlyArray<TimelineItem> = [
  {
    content: "HTML, CSS, JavaScript",
    label: "2018",
    icon: <BrowsersIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "GitHub",
    icon: <GithubLogoIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "React",
    icon: <AtomIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "TypeScript",
    icon: <FileTsIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "API, WebSocket",
    icon: <ArrowsDownUpIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "State Management",
    icon: <DatabaseIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "UI Components Libraries",
    icon: <BlueprintIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Cloudflare",
    icon: <CloudFogIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "TanStack",
    icon: <IslandIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Tailwind CSS",
    icon: <WindIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "React Server Components",
    label: "Now",
    icon: <BoxArrowUpIcon className="text-base-content" weight="fill" />,
  },
];

const work: ReadonlyArray<TimelineItem> = [
  {
    content: "GitHub",
    label: "2022",
    icon: <GithubLogoIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Laravel, React",
    icon: <BedIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Tailwind CSS",
    icon: <WindIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Jira, Notion, Miro",
    icon: <ColumnsPlusRightIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "LIFF, LINEミニアプリ",
    icon: <ChatCircleDotsIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Next.js, Redux, SWR",
    label: "2023",
    icon: (
      <IdentificationBadgeIcon className="text-base-content" weight="fill" />
    ),
  },
  {
    content: "MUI",
    icon: <KeyholeIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Google Maps JavaScript API",
    icon: <MapPinIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "C#, .NET, jQuery, SignalR",
    label: "2024",
    icon: <GradientIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "GitHub Actions, Projects, Copilot",
    icon: <GithubLogoIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "React Native",
    icon: (
      <DeviceMobileCameraIcon className="text-base-content" weight="fill" />
    ),
  },
  {
    content: "Azure",
    icon: <MountainsIcon className="text-base-content" weight="fill" />,
  },
  {
    content: "Playwirhgt",
    label: "Now",
    icon: <MonitorPlayIcon className="text-base-content" weight="fill" />,
  },
];

export const Timelines = () => {
  return (
    <div className="flex flex-wrap justify-center gap-y-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl">hobby dev history</h2>
        <Timeline items={hobby} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl">work dev history</h2>
        <Timeline items={work} />
      </div>
    </div>
  );
};
