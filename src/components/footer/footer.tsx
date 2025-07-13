import React from "react";
import Container from "../container";
import { Card, CardContent } from "../ui/card";
import SiteLogoSmall from "../site-logo-small";
import Link from "next/link";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pb-12">
      <Container>
        <Card>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-8 text-sm p-4 items-center">
              <div className="col-span-1 lg:col-span-2">
                <div className="flex flex-col space-y-2">
                  <h1 className="font-semibold text-muted-foreground">
                    Contact Me
                  </h1>
                  <p>justbenuk@pm.me</p>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-3">
                <div className="flex flex-col space-y-2">
                  <h1 className="font-semibold text-muted-foreground">
                    Follow Me
                  </h1>
                  <div className="flex flex-row items-center space-x-4">
                    <Link href={"/"}>
                      <FaFacebook className="size-5" />
                    </Link>
                    <Link href={"/"}>
                      <FaTwitter className="size-5" />
                    </Link>
                    <Link href={"/"}>
                      <FaInstagram className="size-5" />
                    </Link>
                    <Link href={"/"}>
                      <FaLinkedin className="size-5" />
                    </Link>
                    <Link href={"/"}>
                      <FaDiscord className="size-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-3">
                <div className="flex flex-row gap-4 items-center">
                  <SiteLogoSmall className="h-10 w-10" />
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-semibold text-muted-foreground">
                      Just Ben UK
                    </h1>
                    <p>Tamworth, Staffordshire</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
