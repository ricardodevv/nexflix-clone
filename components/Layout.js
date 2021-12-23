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
        background-color: #141414;
        height: 100%;
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
