/*
 * @jsxImportSource @emotion/react
 */
import { css, jsx } from "@emotion/react";
import Layout from "../components/Layout";
import Image from "next/image";
import indexjpg from "../src/pictures/index.jpg";
import tvimage from "../src/pictures/tv.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Home = () => {
  return (
    <Layout pageTitle="Nextflix latam">
      <div css={css``}>
        <div
          css={css`
            position: relative;
            height: 36.2rem;
          `}
        >
          <div
            css={css`
              position: relative;
              top: -140px;
              width: 100%;
              height: 45rem;
              display: flex;
              border-bottom: 0.5rem solid #222222;
            `}
          >
            <Image src={indexjpg} layout="fill" objectFit="cover"></Image>
            <div
              css={css`
                position: absolute;
                height: 100%;
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
                flex-direction: column;
                height: 50%;
                width: 40rem;
                margin: auto;
                z-index: 4;
                align-items: center;
                justify-content: center;
              `}
            >
              <h2
                css={css`
                  color: white;
                  font-size: 4rem;
                  text-align: center;
                  margin: 0;
                  line-height: 1.1;
                `}
              >
                Unlimited movies, TV shows, and more.
              </h2>
              <p
                css={css`
                  color: white;
                  text-align: center;
                  margin: 20px 0;
                  font-size: 1.7rem;
                `}
              >
                Watch anywhere. Cancel anytime.
              </p>
              <p
                css={css`
                  color: white;
                  text-align: center;
                  font-size: 1.2rem;
                  margin: 0;
                  padding: 10px 0 20px 0;
                `}
              >
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <Box
                css={css`
                  width: 100%;
                  display: flex;
                `}
              >
                <TextField
                  fullWidth
                  label="Email"
                  variant="standard"
                  sx={{
                    background: "white",
                    justifyContent: "center",
                    padding: "0.9rem",
                    "& .MuiInputBase-root:before, .MuiInputBase-root:after, .MuiInput-root:hover:not(.Mui-disabled):before":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-root": {
                      marginTop: "0px",
                    },
                    "& .MuiInputLabel-root": {
                      margin: "0px 12px",
                    },
                  }}
                />
                <Button
                  sx={{
                    fontSize: "1.5rem",
                    width: "15rem",
                    textTransform: "none",
                    backgroundColor: "red",
                    color: "white",
                    "&:hover": {
                      transition: "none",
                      backgroundColor: "red",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            /* height: 40rem; */
            width: 100%;
            background-color: black;
          `}
        >
          <div
            css={css`
              background-color: black;
              border-bottom: 0.5rem solid #222222;
              height: 30rem;
              width: 100%;
            `}
          >
            <Box
              sx={{
                display: "flex",
                p: 5,
                width: "100%",
                height: "100%",
                margin: "auto",
              }}
            >
              <div
                css={css`
                  flex: 1;
                  display: flex;
                `}
              >
                <div
                  css={css`
                    margin: auto;
                    max-width: 30rem;
                  `}
                >
                  <h2
                    css={css`
                      color: white;
                      font-size: 3rem;
                      margin: 0;
                    `}
                  >
                    Enjoy on your TV.
                  </h2>
                  <p
                    css={css`
                      color: white;
                      font-size: 1.5rem;
                      margin: 15px 0 0 0;
                    `}
                  >
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                  </p>
                </div>
              </div>
              <div
                css={css`
                  flex: 1;
                  height: 100%;
                  width: 100%;
                  display: flex;
                `}
              >
                <div
                  css={css`
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <div
                    css={css`
                      margin: auto;
                      width: 33rem;
                      position: absolute;
                      z-index: 10;
                    `}
                  >
                    <Image src={tvimage} objectFit="cover" />
                  </div>
                  <div
                    css={css`
                      background-color: white;
                      position: relative;
                      width: 25rem;
                      height: 14rem;
                      z-index: 0;
                      top: -13px;
                      display: flex;
                    `}
                  >
                    <video loop>
                      <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"
                      ></source>
                    </video>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
