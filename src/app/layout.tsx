// app/layout.tsx
"use client";

import ThemeRegistry from "./themeRegistry";
import Footer from "@/sections/home/Footer";
import Header from "@/sections/home/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/login"; // اخفاء الهيدر والفوتر في صفحة login فقط

  return (
    <html lang="ar">
      <body>
        <ThemeRegistry>
          {!hideHeaderFooter && <Header />}
          {children}
          {!hideHeaderFooter && <Footer />}
        </ThemeRegistry>
      </body>
    </html>
  );
}
