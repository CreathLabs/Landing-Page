import Terms from "@/components/Terms";
import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name="description" content="Creath" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Terms />
    </>
  );
}
