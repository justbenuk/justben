import React from "react";

export default function Hero() {
  return (
    <div className="h-[60dvh]">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl lg:text-7xl bg-yellow-200 font-semibold p-4 rounded text-center">
              Hey, I&apos;m Ben
            </h1>
          </div>
          <h3 className="text-3xl lg:text-5xl font-semibold text-center">
            Self-Taught, Freelance Developer
          </h3>
          <p className="lg:w-1/2 text-center mx-auto">
            Im not here to sell my self, I have worked on a few projects that I
            show in my portfolio, If you like what you see and want me to work
            on your project. Feel free to get in touch
          </p>
        </div>
      </div>
    </div>
  );
}
