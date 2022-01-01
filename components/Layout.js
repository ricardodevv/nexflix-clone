/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <div
      css={css`
        background-color: #111;
        height: 100%;
        width: 100vw;
        color: white;
      `}
    >
      <title>{pageTitle}</title>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
