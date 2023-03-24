import Details from "@/components/Blogs/Details";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blog Details</title>
        <meta name="description" content="Creath" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Details />
    </>
  );
}
