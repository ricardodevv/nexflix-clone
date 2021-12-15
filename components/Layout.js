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
        background-color: transparent;
        height: 100%;
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
