import Layout from "@/components/Layout";
import initAOS from "@/initAOS";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
