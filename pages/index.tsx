import { Layout } from "antd";
import React from "react";
import {TopBar} from "../src/common/top-bar";
import {Home} from "@/shared/home";
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Index() {
  return (
    <Layout className="layout">
     <TopBar/>
      <Home/>
    </Layout>
  );
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<{  }> = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? 'en', ['common']),
  },
})
