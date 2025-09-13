import { MoonStarsIcon, SunHorizonIcon } from "@phosphor-icons/react";
import { useMemo } from "hono/jsx";
import { Script } from "vite-ssr-components/hono";

export const ThemeToggleButton = () => {
  const isDark = useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    [],
  );
  const targetTheme = isDark ? "nord" : "abyss";

  return (
    <label className="swap swap-rotate absolute top-4 right-4">
      <input className="theme-controller" type="checkbox" value={targetTheme} />

      <SunHorizonIcon
        className={`swap-${isDark ? "off" : "on"} h-10 w-10 fill-current`}
      />
      <MoonStarsIcon
        className={`swap-${isDark ? "on" : "off"} h-10 w-10 fill-current`}
      />
    </label>
  );
};

export const ThemeToggle = () => {
  return (
    <>
      <div id="theme-toggle"></div>
      <Script src="/src/client/ThemeToggle/renderThemeToggle.ts" />
    </>
  );
};
