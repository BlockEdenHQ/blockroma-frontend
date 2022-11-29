import {Provider as StyletronProvider} from "styletron-react";
import "../styles/globals.css";
import type {AppProps} from "next/app";
import {styletron} from "../src/styletron";
import {ConfigProvider} from "antd";
import {ThemeProvider, tokenColors} from "../src/common/theme-provider";
import "../src/stylesheets/main-page.scss"
import {Provider as ReduxProvider} from 'react-redux'
import {configureStore} from "../src/common/configure-store";
import {appWithTranslation} from "next-i18next";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "@/shared/common/apollo-client";
import {I18nextProvider} from "react-i18next";
import nextI18NextConfig from '../next-i18next.config.js';

export default appWithTranslation((function App({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={configureStore({base: {}})}>
        <ConfigProvider theme={{
          token: tokenColors,
        }}>
          <StyletronProvider value={styletron}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
          </StyletronProvider>
        </ConfigProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
}), nextI18NextConfig);
