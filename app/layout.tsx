import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planix | Online Randevu ve Müşteri Yönetim Sistemi",
  description:
    "Planix ile randevularınızı kolayca yönetin, müşterilerinize otomatik SMS hatırlatmaları gönderin. İşletmeniz için profesyonel randevu yönetim sistemi.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
