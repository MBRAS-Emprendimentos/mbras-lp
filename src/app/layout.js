import "./globals.css";
import React, { Suspense } from "react";
import Script from "next/script";
const GTM_ID = "GTM-W5NWWRK";

import { Inter, Montserrat } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
const Footer = React.lazy(() => import("../components/Footer"));

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "MBRAS Express",
  description:
    "Busca Expressa - Encontre seu imóvel com mais agilidade e facilidade ",
};

export default function RootLayout({ children }) {
  return (
    <html className={"overscroll-contain"} lang="pt-BR">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <SEO />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }}
      />
      <body className={mont.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
        <Suspense fallback={<div>Carregando...</div>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
