"use client";
import { ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme="light">{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
