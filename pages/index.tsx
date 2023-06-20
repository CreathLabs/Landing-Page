import Head from "next/head";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Creath</title>
        <meta name="description" content="Creath" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
