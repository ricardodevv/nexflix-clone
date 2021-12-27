/*
 * @jsxImportSource @emotion/react
 */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Layout from "../components/Layout";
import Home from "../components/Home";
import HomeUnlogged from "../components/HomeUnlogged";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") {
    return (
      <div
        css={css`
          backgorund-color: black;
        `}
      >
        <p
          css={css`
            color: white;
          `}
        >
          Loading...
        </p>
      </div>
    );
  }

  // if (status !== "authenticated") {
  //   return <HomeUnlogged />;
  // }

  // if (status === "authenticated") {
  return (
    <Layout pageTitle="Netflixapp - Home Page">
      <Home />
    </Layout>
  );
  // }
};

export default Index;
