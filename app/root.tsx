/* The <LiveReload /> component is useful during development to auto-refresh our browser whenever we make a change. Because our build server is so fast, the reload will often happen before you even notice ⚡ */
import { LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>It's funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
