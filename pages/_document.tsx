// In _document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&v=3&libraries=geometry,places`}
          strategy="lazyOnload"
        ></Script>
      </body>
    </Html>
  );
}
