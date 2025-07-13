import React from "react";
import Container from "../container";
import Link from "next/link";
import { FaSmile } from "react-icons/fa";
import SiteLogoSmall from "../site-logo-small";
import DesktopMenuList from "../menus/desktop-menu-list";
import { Card, CardContent } from "../ui/card";

export default function Header() {
  return (
    <Container className="mt-6">
      <Card className="rounded-xl bg-white p-2">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <SiteLogoSmall />
            <DesktopMenuList />
          </div>
          <div>
            <Link
              href={"/contact"}
              className="bg-yellow-200 px-6 py-2 rounded-lg flex flex-row space-x-4 items-center"
            >
              <FaSmile />
              <span>Lets Talk</span>
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
}
