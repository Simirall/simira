import { jsxRenderer } from "hono/jsx-renderer";
import { Link, ViteClient } from "vite-ssr-components/hono";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossorigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
});
