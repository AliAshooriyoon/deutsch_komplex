import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./auth/Provider";
import ClientThemeProvider from "./ClientThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Deutsch Komplex – Interaktive Plattform zum Deutschlernen",
  description:
    "Lerne Deutsch auf einfache und komplexe Weise! Deutsch Komplex bietet interaktive Übungen, Wortschatz-Training und Grammatik-Erklärungen für motivierte Lernende – ideal für alle, die sich auf Ausbildung oder Studium in Deutschland vorbereiten.",
  keywords: [
    "Deutsch lernen",
    "Deutsch Übungen",
    "Grammatik",
    "Wortschatz",
    "Deutsch A1 A2 B1 B2",
    "Ausbildung in Deutschland",
    "Deutsch Komplex",
    "Online Deutschkurs",
    "Deutsch Lernen App",
  ],
  authors: [{ name: "Ali Ashooriyoon", url: "https://github.com/AliAshooriyoon" }],
  creator: "Ali Ashooriyoon",
  openGraph: {
    title: "Deutsch Komplex – Interaktive Plattform zum Deutschlernen",
    description:
      "Verbessere dein Deutsch mit interaktiven Aufgaben, Wortschatzlisten und Grammatikübungen. Ideal für Ausbildung, Studium und Alltag in Deutschland.",
    url: "https://deutsch-komplex.vercel.app/",
    siteName: "Deutsch Komplex",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutsch Komplex – Interaktive Plattform zum Deutschlernen",
    description:
      "Deutsch einfach und komplex lernen – mit interaktiven Übungen, Grammatik-Erklärungen und Wortschatz-Training.",
    creator: "@AliAshooriyoon",
  },
};
;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SpeedInsights />
      <body>
        <ClientThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}


