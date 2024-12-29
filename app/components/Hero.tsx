"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Flying Eagle Animation with 3D Follow Cursor Effect */}
      <motion.img
        src="https://res.cloudinary.com/dhavdc5dx/image/upload/v1735481833/new_logo_2_womtcl.png"
        alt="Eagle Logo"
        className="absolute z-0"
        style={{
          transform: `translate(-50%, -50%) rotateX(${(mousePosition.y - window.innerHeight / 2) / 10}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) / 10}deg) scale(1.2)`,
          opacity: 0.2,
          left: "50%",
          top: "50%",
        }}
      />

      {/* Welcome Text */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center z-10 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-yellow-300">M.Tech Hostel KGEC</span>
      </motion.h1>
    </div>
  );
}
