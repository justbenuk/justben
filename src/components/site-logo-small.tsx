import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SiteLogoSmall() {
  return (
    <Link href={"/"}>
      <Image
        src={"/me.png"}
        alt="site logo"
        height={35}
        width={35}
        className="rounded-full p-0.5 bg-yellow-200"
      />
    </Link>
  );
}
