/* @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Layout from "../components/Layout";
import Image from "next/image";
import indexjpg from "../src/pictures/index.jpg";

const Home = () => {
  return (
    <Layout pageTitle="Nextflix latam">
      <div>
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              position: absolute;
              top: -140px;
              width: 100%;
            `}
          >
            <Image src={indexjpg} layout="fill" objectFit="cover"></Image>
            <div
              css={css`
                position: absolute;
                height: 50rem;
                width: 100%;
                z-index: 0;
                background: linear-gradient(
                  #000000ed,
                  #00000059,
                  #000000bd 80%
                );
              `}
            ></div>
            <div
              css={css`
            position: relative;
            display: flex;
            height: 50rem;
            width 70rem;
            margin; auto;
            z-index: 4;
            align-items: center;
            justify-content: center;
          `}
            >
              <h2
                css={css`
                  color: white;
                `}
              >
                Películas y series ilimitadas y mucho más.
              </h2>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <div css={css``}></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
