import type {
  ErrorBoundaryComponent,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Navigation from "~/components/Navigation/Navbar";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Germaine P.",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error(error);
  return (
    <html>
      <head>
        <title>Germaine P. Error</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-background">
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Germaine P.</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-background">
        <Navigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
