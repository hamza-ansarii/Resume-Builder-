import "globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "NextOra.Ai",
  description:
    "NextOra.Ai is your smart, AI-powered resume builder and analyzer to help you create ATS-friendly resumes effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 🔗 Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: For high-res PNG favicon */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
