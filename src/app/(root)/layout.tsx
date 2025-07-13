import Header from "@/components/header/header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
