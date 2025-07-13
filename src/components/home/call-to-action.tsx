import Link from "next/link";
import React from "react";
import { FaSmile } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div className="py-34">
      <div className="bg-white rounded-xl py-24 flex flex-col items-center justify-center">
        <h1 className="w-1/3 mx-auto text-center text-6xl">
          Want to start a project?
        </h1>
        <Link
          href={"/contact"}
          className="flex flex-row items-center space-x-2 mt-10 bg-yellow-200 px-8 py-4 rounded-2xl"
        >
          <FaSmile />
          <span>Lets Talk</span>
        </Link>
      </div>
    </div>
  );
}
