import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Just Ben UK",
    default: "Just ben UK",
  },
  description: "A freelance web developer based in the midlands",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-200">{children}</body>
    </html>
  );
}
