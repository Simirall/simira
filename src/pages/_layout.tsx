import "../styles.css";

import { type ReactNode, ViewTransition } from "react";
import { Nav } from "./_components/Nav";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <ViewTransition>
      <div className="h-svh bg-radial-[at_25%_25%] from-sky-50 via-sky-100 to-sky-200 p-4 sm:p-12 dark:from-cyan-900 dark:via-sky-950 dark:to-gray-900">
        <div className="mockup-window h-full w-full rounded-2xl border-4 border-sky-200 bg-sky-200 shadow-xl dark:border-sky-700 dark:bg-sky-700">
          <div className="h-full [scrollbar-color:white_var(--color-sky-200)] overflow-y-scroll bg-white bg-[radial-gradient(#0069a8_1px,transparent_1px)] bg-size-[16px_16px] dark:[scrollbar-color:white_var(--color-sky-700)] dark:bg-slate-500 dark:bg-[radial-gradient(#fff_1px,transparent_1px)]">
            <main className="flex min-h-full flex-col items-center justify-center-safe p-4 py-8 text-xl text-slate-800 dark:text-slate-100">
              {children}
            </main>
          </div>
          <Nav />
        </div>
      </div>
    </ViewTransition>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
