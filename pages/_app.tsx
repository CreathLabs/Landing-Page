import Layout from "@/components/Layout";
import MenuContextProvider from "@/contexts/menuContext";
import initAOS from "@/initAOS";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <MenuContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuContextProvider>
  );
}
