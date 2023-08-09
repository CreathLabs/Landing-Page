import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="!scroll-smooth !scroll-pt-[150px]">
      <Head>
        <meta
          name="description"
          content="Creath here Digital meets Physical Creativity meets Innovation"
        />
        <meta
          name="keywords"
          content="Creath, Art Marketplace, Web3 Company, Blockchain, Creath Labs, Digital Gallery, Technology, Creath and Creatives, San Jose, CA, Lagos, Art, Where Digital meets Physical, Creativity meets Innovation,"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4PKDEV8KMW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4PKDEV8KMW');
              `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body id="root">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
