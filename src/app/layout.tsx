import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { siteConfig } from "@/content/site";
import "./globals.css";

// Display: Bricolage Grotesque. Body: Instrument Sans. Both are variable fonts,
// self-hosted by next/font at build time (no runtime request to Google).
const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const title = `${siteConfig.name} | Cleaning products`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary", title, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08121a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="flex min-h-svh flex-col bg-mist-50 font-sans text-graphite-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-mist-50 focus:px-4 focus:py-3 focus:text-small focus:font-medium focus:text-graphite-900"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
