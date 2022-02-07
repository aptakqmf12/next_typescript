import Head from "next/head";
import React from "react";
import { HeadType } from "../types/types";

const HeadInfo: React.FC<HeadType> = ({ title, keyword, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta keyword={keyword} /> */}
        <meta content={content} />
      </Head>
    </>
  );
};

HeadInfo.defaultProps = {
  title: "next exmple",
  keyword: "next ex",
  content: "practice next js",
};

export default HeadInfo;
