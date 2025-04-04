'use client'

import "../globals.css";
import Image from "next/image";
import { Menu } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="grid grid-cols-7 w-screen gap-8 items-center justify-center text-center fixed top-0">
      {/* left side */}
      <div className="col-start-2 col-span-2 mx-auto gap-16 hidden md:relative md:flex">
        <a
          className="flex items-center hover:underline hover:underline-offset-4 text-[var(--secondary)]"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="flex items-center hover:underline hover:underline-offset-4 text-[var(--secondary)]"
          href="/about"
          rel="noopener noreferrer"
        >
          About
        </a>
      </div>

      {/* Lotus */}
      <a className="col-start-4 mx-auto col-300" href="/">
        <Image
          className="dark:invert"
          src="/lotus.svg"
          width={60}
          height={60}
          alt="lotus"
        />
      </a>

      {/* right side */}
      <div className="col-start-5 col-span-2 mx-auto gap-16 hidden md:relative md:flex">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
          href="/"
          rel="noopener noreferrer"
        >Programming</a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[var(--secondary)]"
          href="/"
          rel="noopener noreferrer"
        >Motion Graphics</a>
      </div>
      

      {/* mobile options */}

      {/* burger menu */}
      <div className="col-start-7 mx-auto gap-16 md:hidden">
        <button onClick={async () => {
          console.log("hi");
        }}>
        <Menu color="var(--secondary)" />

        </button>
      </div>


    </nav>
  )
}