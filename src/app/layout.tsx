import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CloudOnboard — Enterprise Software Architecture",
    template: "%s — CloudOnboard",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "enterprise software architecture",
    "cloud solution architecture",
    "Google Cloud",
    "Azure",
    "system integration",
    "FinOps",
    "DevSecOps",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    title: "CloudOnboard — Enterprise Software Architecture",
    description: site.description,
    siteName: site.name,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudOnboard — Enterprise Software Architecture",
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  slogan: site.tagline,
  areaServed: "Worldwide",
  knowsAbout: [
    "Enterprise software architecture",
    "Google Cloud Platform",
    "Microsoft Azure",
    "System integration",
    "Cloud cost optimization",
    "DevSecOps",
    "Observability",
  ],
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy text-foam">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-foam focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
