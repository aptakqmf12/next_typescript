import Head from "next/head";
import React from "react";
import { HeadType } from "../types/types";

const HeadInfo: React.FC<HeadType> = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
    </>
  );
};

HeadInfo.defaultProps = {
  title: "next exmple",
  keywords: "next ex",
  description: "practice next js",
};

export default HeadInfo;
