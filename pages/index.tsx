import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Home } from "@/shared/home";
import { RawNav } from "@/shared/home/components/raw-nav";
import { Footer } from "@/shared/common/footer";

export default function Index() {
  return (
    <div>
      <RawNav />
      <Home />
      <Footer />
    </div>
  );
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
