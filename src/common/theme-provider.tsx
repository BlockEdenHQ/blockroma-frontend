import React, { useEffect } from "react";
import { Theme } from "./theme-types";
import { fontFamily } from "./styles/style-font";
import { AliasToken } from "antd/lib/theme";

export type ThemeCode = "light" | "dark";

export const THEME = {
  colors: {
    primary: "#de4c4f",
    secondary: "#5c629e",

    black: "#000000",
    black95: "#050505",
    black80: "#999999",
    black60: "#cccccc",
    black40: "#e5e5e5",
    black20: "#f0f0f0",
    black10: "#f7f7f7",

    text01: "#4c4c4c",
    textReverse: "#fff",

    white: "#fff",

    error: "#e71d32",
    success: "#5aa700",
    warning: "#efc100",
    information: "#5aaafa",

    nav01: "#fff",
    nav02: "#575a5d",
    nav03: "#323232",
  },
  sizing: ["2px", "6px", "10px", "16px", "24px", "32px"],
  fonts: [
    {
      fontSize: "12px",
      lineHeight: "20px",
    },
    {
      fontSize: "14px",
      lineHeight: "22px",
    },
    {
      fontSize: "16px",
      lineHeight: "24px",
    },
    {
      fontSize: "20px",
      lineHeight: "28px",
    },
    {
      fontSize: "24px",
      lineHeight: "32px",
    },
  ],
};

export const tokenColors: Partial<AliasToken> = {
  colorPrimary: THEME.colors.primary,
  colorTextBase: THEME.colors.text01,
  fontFamily,
  fontSize: 16,
  colorBgLayout: THEME.colors.nav01,
};

const { Provider, Consumer } = React.createContext<Theme>(THEME);

export const defaultThemeCode =
  typeof window !== "undefined"
    ? window.document.documentElement.getAttribute("data-theme")
    : null;

type Props = {
  light?: Theme;
  dark?: Theme;
  themeCode?: ThemeCode;
  children?: React.ReactNode;
  setTheme?(t: ThemeCode): void;
};

export const ThemeProvider = ({
  light = THEME,
  dark,
  children,
  themeCode = defaultThemeCode === "dark" ? "dark" : "light",
  setTheme = () => null,
}: Props): JSX.Element => {
  let curTheme = light;
  if (themeCode === "dark" && dark) {
    curTheme = dark;
  }

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addListener(({ matches }: { matches: boolean }) => {
        setTheme(matches ? "dark" : "light");
      });
  }, [setTheme]);

  return <Provider value={curTheme}>{children}</Provider>;
};

export { Consumer };
