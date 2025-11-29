import type { Metadata } from "next";
import "./globals.css";

import AppLayout from "@/component/app-layout";

export const metadata: Metadata = {
  title: "GoExplore - Your Next Adventure",
  description: "Find the perfect flight and resort for your next journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-secondary dark:bg-background-dark font-display text-slate-700 dark:text-slate-300">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
