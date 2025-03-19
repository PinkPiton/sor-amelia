import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "./_features/Navigation";

export const metadata: Metadata = {
  title: "Shop",
  description: "H/W",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased px-16 py-8`}>
        <Providers>
          <Navigation />

          <div className="mt-16">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
