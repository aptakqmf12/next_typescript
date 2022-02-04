import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

const SecondPost = () => {
  return (
    <Layout home={true}>
      <Head>
        <title>Second Posts</title>
      </Head>
      <h2>seconnd pages</h2>
    </Layout>
  );
};

export default SecondPost;
