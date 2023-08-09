import Head from "next/head";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Creath</title>
        <meta
          name="description"
          content="Creath here Digital meets Physical Creativity meets Innovation"
        />
        <meta
          name="keywords"
          content="Creath, Art Marketplace, Web3 Company, Blockchain, Creath Labs, Digital Gallery, Technology, Creath and Creatives, San Jose, CA, Lagos, Art, Where Digital meets Physical, Creativity meets Innovation,"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
