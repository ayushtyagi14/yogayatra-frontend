import Head from "next/head";
import React from "react";

const MyHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon.png" />
    </Head>
  );
};

export default MyHead;
