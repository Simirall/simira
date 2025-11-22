import type { ReactNode } from "react";

export default async function RootElement({
  children,
}: {
  children: ReactNode;
}) {
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
      <body>{children}</body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
