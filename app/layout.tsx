import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importing the Geist font styles
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "M.Tech Hostel - K.G.E.C.",
  description: "Official website of the M.Tech Hostel at K.G.E.C.",
  icons: {
    icon: "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735481661/Squircle_h3j5xy.svg", // Set SVG as favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to the favicon (SVG icon) */}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dhavdc5dx/image/upload/v1735481661/Squircle_h3j5xy.svg"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       

        {/* Main Content */}
        <main>{children}</main>

        
      </body>
    </html>
  );
}
