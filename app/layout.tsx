import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./auth/Provider";

export const metadata: Metadata = {
  title: "Deutsch komplex",
  description: "Deutsch einfach und komplex lernen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
