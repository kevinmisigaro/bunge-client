import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export default function PlainLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <Head>
        <title>Bunge Monitoring Platform</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
