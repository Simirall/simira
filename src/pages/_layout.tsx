import "../styles.css";

import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <head>
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <meta content="Simirall Site" name="description" />
      </head>
      <body className="h-svh bg-radial-[at_25%_25%] from-sky-50 via-sky-100 to-sky-200 p-8 dark:from-cyan-900 dark:via-sky-950 dark:to-gray-900">
        <div className="mockup-window h-full w-full rounded-2xl border-4 border-sky-200 bg-sky-200 shadow-xl dark:border-sky-700 dark:bg-sky-700">
          <div className="h-full overflow-y-scroll bg-white dark:bg-slate-500">
            <main className="flex min-h-full flex-col p-4 text-slate-800 text-xl dark:text-slate-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
