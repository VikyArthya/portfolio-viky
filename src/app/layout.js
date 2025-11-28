import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Viky Arthya Saputra - ERP Developer | Odoo & Laravel Specialist",
  description: "Experienced ERP Developer with 2+ years in Odoo, Laravel, and modern web technologies. Specialized in enterprise systems, CRM, and business automation solutions.",
  keywords: "ERP Developer, Odoo Developer, Laravel Developer, Full Stack Developer, Web Developer, Enterprise Systems, CRM Developer, PHP Developer, React Developer",
  authors: [{ name: "Viky Arthya Saputra" }],
  creator: "Viky Arthya Saputra",
  publisher: "Viky Arthya Saputra",
  robots: "index, follow",
  openGraph: {
    title: "Viky Arthya - ERP Developer & Web Developer",
    description: "Experienced ERP Developer specializing in Odoo, Laravel, and modern web technologies. Let's build your business solution together.",
    url: "https://portfolio-viky.vercel.app",
    siteName: "Viky Arthya Portfolio",
    images: [
      {
        url: "/images/profil.png",
        width: 500,
        height: 500,
        alt: "Viky Arthya - ERP Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viky Arthya - ERP Developer | Odoo & Laravel Specialist",
    description: "Experienced ERP Developer with 2+ years in Odoo, Laravel, and modern web technologies.",
    images: ["/images/profil.png"],
  },
  metadataBase: new URL("https://portfolio-viky.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Viky Arthya Saputra",
    "jobTitle": "ERP Developer & Web Developer",
    "description": "Experienced ERP Developer with 2+ years in Odoo, Laravel, and modern web technologies",
    "url": "https://portfolio-viky.vercel.app",
    "image": "https://portfolio-viky.vercel.app/images/profil.png",
    "sameAs": [
      "https://www.linkedin.com/in/viky-arthya-saputra-23a16b247",
      "https://github.com/vikyarthya",
    ],
    "knowsAbout": [
      "ERP Development",
      "Odoo",
      "Laravel",
      "React.js",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Web Development"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": "ERP Development",
      "description": "Custom ERP solutions using Odoo and Laravel"
    }
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: '#000000',
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/skulls.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundAttachment: 'fixed',
          backgroundPosition: '0 0',
          backgroundBlendMode: 'overlay',
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
