import { JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/StairTransition";
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "---font-jetbrainsMono",
});

export const metadata = {
  title: "Gladwin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={JetBrainsMono.variable}><Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
         <SpeedInsights />
        <Analytics />
      </body>
      
    </html>
  );
}
