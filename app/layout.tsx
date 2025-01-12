import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./src/components/UI/navbar/Navbar";
import Providers from "./src/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "giaco-dev",
  description: "Giacomo Tolari's portfolio",
  // openGraph: {
  //   images: [
  //     {
  //       url: "https://giaco.dev/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "giaco.dev",
  //       type: "image/jpeg",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      /*suppressHydrationWarning*/
    >
      <body className={inter.className}>
        <Providers>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
