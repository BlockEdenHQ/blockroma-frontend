import { Layout } from "antd";
import React from "react";
import { TopBar } from "../src/common/top-bar";
import {Home} from "@/shared/home";


export default function HomeOut() {
  return (
    <Layout className="layout">
      <TopBar />
      <Home/>
    </Layout>
  );
}
