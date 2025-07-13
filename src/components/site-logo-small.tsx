import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SiteLogoSmallProps = {
  className?: string;
};

export default function SiteLogoSmall({ className }: SiteLogoSmallProps) {
  return (
    <Link href={"/"}>
      <Image
        src={"/me.png"}
        alt="site logo"
        height={35}
        width={35}
        className={cn("rounded-full p-0.5 bg-yellow-200", className)}
      />
    </Link>
  );
}
