import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { RawNav } from "@/shared/home/components/raw-nav";
import React from "react";
import nextI18NextConfig from "../../next-i18next.config.js";
import { TxDetailsContainer } from "@/shared/tx-details-container/tx-details-container";

export default function TxHashPage() {
  return (
    <>
      <RawNav />
      <TxDetailsContainer />
    </>
  );
}

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? "en",
      ["common"],
      nextI18NextConfig
    )),
  },
});

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
