"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default function GlobalStylesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
