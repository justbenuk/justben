import { MENUiTEMS } from "@/data/menu-items";
import React from "react";
import DesktopMenuItem from "./desktop-menu-item";

export default function DesktopMenuList() {
  return (
    <nav className="hidden lg:flex flex-row items-center space-x-6">
      {MENUiTEMS.map((item, idx) => (
        <DesktopMenuItem key={idx} item={item} />
      ))}
    </nav>
  );
}
