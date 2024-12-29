"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image
            src="https://res.cloudinary.com/dhavdc5dx/image/upload/v1735481661/Squircle_h3j5xy.svg"
            alt="M.Tech Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold">
            M.Tech Hostel - K.G.E.C.
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#hall-day" className="text-white hover:underline">
            Hall Day
          </Link>
          <Link href="#bakkhali-tour" className="text-white hover:underline">
            Bakkhali Tour
          </Link>
          <Link href="#cricket" className="text-white hover:underline">
            Cricket Tournament
          </Link>
          <Link href="#chess" className="text-white hover:underline">
            Chess Competition
          </Link>
          <Link href="#alumni" className="text-white hover:underline">
            Alumni
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-700 to-indigo-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="#hall-day"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg transition-transform transform hover:scale-110 hover:text-yellow-400"
            >
              Hall Day
            </Link>
            <Link
              href="#bakkhali-tour"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg transition-transform transform hover:scale-110 hover:text-yellow-400"
            >
              Bakkhali Tour
            </Link>
            <Link
              href="#cricket"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg transition-transform transform hover:scale-110 hover:text-yellow-400"
            >
              Cricket Tournament
            </Link>
            <Link
              href="#chess"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg transition-transform transform hover:scale-110 hover:text-yellow-400"
            >
              Chess Competition
            </Link>
             <Link
              href="#alumni"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg transition-transform transform hover:scale-110 hover:text-yellow-400"
            >
              Alumni
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
