import Link from "next/link";
import React from "react";

type DesktopMenuItemProps = {
  item: {
    name: string;
    href: string;
  };
};

export default function DesktopMenuItem({ item }: DesktopMenuItemProps) {
  return <Link href={item.href}>{item.name}</Link>;
}
