/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
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

  if (!session) {
    return <HomeUnlogged />;
  }

  if (session) {
    return <Home />;
  }
};

export default Index;
