"use client";

import ThemeRegistry from "./themeRegistry";
import Footer from "@/sections/home/Footer";
import Header from "@/sections/home/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
