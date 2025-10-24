/* eslint-disable @next/next/no-img-element */
"use client"

import Footer from "./components/footer";
import Hero from "./components/hero";


export default function Home() {

  return (
    <div className="h-screen w-screen relative md:overflow-hidden">
      {/* background animation */}
      <img
          className={`hidden lg:block w-full h-full bg-cover absolute z-0 invert dark:invert-0`}
          src="/BG_1920.gif"
          width={1920}
          height={1080}
          alt="lotus"
        />
        {/* mobile BG */}
        <img
          className="block lg:hidden w-full h-full bg-cover absolute z-0 invert dark:invert-0"
          src="/BG_768.gif"
          width={1920}
          height={1080}
          alt="lotus"
        />
      <Hero />
      <Footer landingPage={true} />
    </div>
  );
}
