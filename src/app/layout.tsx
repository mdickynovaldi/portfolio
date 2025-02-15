import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/i18n-context";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | " + SITE_NAME,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
  keywords: [
    "portfolio",
    "web developer",
    "fullstack developer",
    "mobile developer",
    "unity developer",
    "Moch Dicky Novaldi",
    "software engineer",
  ],
  authors: [{ name: "Moch Dicky Novaldi" }],
  creator: "Moch Dicky Novaldi",
  publisher: "Moch Dicky Novaldi",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@mdickynovaldi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <I18nProvider>
              <div className={roboto.className}>{children}</div>
            </I18nProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
