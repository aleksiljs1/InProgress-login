import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import "./globals.css";
import "@/lib/interceptor";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A Next.js application with Radix UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
