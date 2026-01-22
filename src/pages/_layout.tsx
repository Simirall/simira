import "../styles.css";

import type { ReactNode } from "react";
import { Nav } from "./_components/Nav";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="h-svh bg-radial-[at_25%_25%] from-sky-50 via-sky-100 to-sky-200 p-4 sm:p-12 dark:from-cyan-900 dark:via-sky-950 dark:to-gray-900">
      <div className="mockup-window h-full w-full rounded-2xl border-4 border-sky-200 bg-sky-200 shadow-xl dark:border-sky-700 dark:bg-sky-700">
        <div className="h-full overflow-y-scroll bg-[radial-gradient(#0069a8_1px,transparent_1px)] bg-size-[16px_16px] bg-white [scrollbar-color:white_var(--color-sky-200)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] dark:bg-slate-500 dark:[scrollbar-color:white_var(--color-sky-700)]">
          <main className="justify-center-safe flex min-h-full flex-col items-center p-4 py-8 text-slate-800 text-xl dark:text-slate-100">
            {children}
          </main>
        </div>
        <Nav />
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
