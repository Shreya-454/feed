import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>FEED</title>
       {/* Primary Meta Tags */}
<title>Feed </title>
<meta name="title" content="Feed " />
<meta name="description" content=" to next battle" />

{/* Open Graph / Facebook */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="Feed " />
<meta property="og:description" content=" to next battle" />
<meta property="og:image" content="https://i.postimg.cc/NKTYT8gb/badge.png" />

 {/* Twitter */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Feed " />
<meta property="twitter:description" content=" to next battle" />
<meta property="twitter:image" content="https://i.postimg.cc/NKTYT8gb/badge.png" />

 {/* Meta Tags Generated with https://metatags.io */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
