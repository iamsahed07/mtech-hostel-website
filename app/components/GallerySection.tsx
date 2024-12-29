"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiDownload, FiMaximize } from "react-icons/fi";

type GallerySectionProps = {
  id: string;
  title: string;
  images: string[];
};

export default function FancyGallerySection({ id, title, images }: GallerySectionProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isClient, setIsClient] = useState(false);  // Track if the code is running on the client side

  const openPreview = (index: number) => {
    setCurrentIndex(index);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images[currentIndex];
    link.download = `image-${currentIndex + 1}`;
    link.click();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (isPreviewOpen) {
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") closePreview();
    }
  };

  useEffect(() => {
    // Only add event listener on the client side
    if (typeof window !== "undefined") {
      setIsClient(true);  // Ensure we're on the client-side before adding the event listener
      window.addEventListener("keydown", handleKeyDown);
      
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isPreviewOpen]);

  if (!isClient) {
    return null;  // Return nothing if on the server-side
  }

  return (
    <section id={id} className="py-16 px-6 sm:px-12 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
            }}
            onClick={() => openPreview(index)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover rounded-xl transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-all ${
              isFullScreen ? "p-0" : "p-6"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Main Image */}
            <div
              className={`relative max-w-5xl w-full ${
                isFullScreen ? "h-screen" : "max-h-[80vh]"
              }`}
            >
              <motion.img
                src={images[currentIndex]}
                alt={`Preview Image ${currentIndex + 1}`}
                className="object-contain rounded-lg w-full h-full transition-all duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              />

              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 text-white text-2xl bg-red-600 p-3 rounded-full hover:bg-red-500 transition"
              >
                <FiX />
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={toggleFullScreen}
                className="absolute top-4 left-4 text-white text-2xl bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition"
              >
                <FiMaximize />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
              >
                <FiChevronRight />
              </button>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-4 text-white text-lg bg-gray-900 bg-opacity-75 px-4 py-2 rounded-lg">
                {currentIndex + 1} / {images.length}
              </div>

              {/* Download Button */}
              <button
                onClick={downloadImage}
                className="absolute bottom-4 right-4 text-white text-lg bg-green-600 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <FiDownload />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thumbnail Gallery (Smaller Images) */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => openPreview(index)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={150}
              height={100}
              className="object-cover rounded-lg transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
