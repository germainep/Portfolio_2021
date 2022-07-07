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
import React from "react";

import Navigation from "~/components/Navigation/Navbar";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  description: "Personal Portfolio for Germaine P",
  keywords: "web developer, Danville VA, javascript, react, remix",
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
    <Document>
      <Layout>
        <Outlet />
      </Layout>
      <ScrollRestoration />
    </Document>
  );
}

function Document({ children, title }: React.PropsWithChildren<any>) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : "Germaine P."}</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-background">
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">{children}</div>
    </>
  );
}
