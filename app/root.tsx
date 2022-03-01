/* The <LiveReload /> component is useful during development to auto-refresh our browser whenever we make a change. Because our build server is so fast, the reload will often happen before you even notice ⚡ */
import { LiveReload, Outlet, Links } from "remix";
import type { LinksFunction } from "remix";

import globalStylesUrl from "./styles/global.css";
import globalStylesMediumUrl from "./styles/global-medium.css";
import globalStylesLargeUrl from "./styles/global-large.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet", href: globalStylesMediumUrl },
  { rel: "stylesheet", href: globalStylesLargeUrl },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>It's funny!</title>
        <Links></Links>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
