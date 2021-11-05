/*
 * @jsxImportSource @emotion/react
 */
import { css, jsx } from "@emotion/react";
import Layout from "../components/Layout";
import Image from "next/image";
import indexjpg from "../src/pictures/index.jpg";
import tvimage from "../src/pictures/tv.png";
import mobileimage from "../src/pictures/mobile.jpg";
import strangerthings from "../src/pictures/boxshot.png";
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
            width: 100%;
            background-color: black;
          `}
        >
          <div
            css={css`
              background-color: black;
              border-bottom: 0.5rem solid #222222;
              padding: 40px 45px;
            `}
          >
            <Box
              sx={{
                display: "flex",
                maxWidth: "1100px",
                margin: "auto",
              }}
            >
              <div
                css={css`
                  flex: 0 1 auto;
                  display: flex;
                  padding: 0 3rem 0 0;
                  align-items: center;
                  width: 52%;
                `}
              >
                <div
                  css={css`
                    margin: auto;
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
                      font-size: 1.7rem;
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
                  flex: 0 1 auto;
                  display: flex;
                  width: 48%;
                `}
              >
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                  `}
                >
                  <div
                    css={css`
                      margin: auto;
                      position: relative;
                      z-index: 10;
                    `}
                  >
                    <Image src={tvimage} objectFit="cover" />
                  </div>
                  <div
                    css={css`
                      background-color: white;
                      position: absolute;
                      height: 54%;
                      z-index: 0;
                      top: 75px;
                      left: 65px;
                      display: flex;
                    `}
                  >
                    <video autoPlay loop muted>
                      <source src="tvloop.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div
            css={css`
              background-color: black;
              border-bottom: 0.5rem solid #222222;
              padding: 40px 45px;
            `}
          >
            <Box
              sx={{
                display: "flex",
                maxWidth: "1100px",
                margin: "auto",
              }}
            >
              <div
                css={css`
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  width: 48%;
                `}
              >
                <div
                  css={css`
                    z-index: 1;
                  `}
                >
                  <Image src={mobileimage} objectFit="cover" />
                </div>
                <div
                  css={css`
                    width: 20rem;
                    position: absolute;
                    border: 2px solid #404040;
                    z-index: 10;
                    display: flex;
                    border-radius: 10px;
                    bottom: 24px;
                    background-color: #000;
                    align-self: end;
                  `}
                >
                  <div
                    css={css`
                      margin: auto;
                      width: 3.5rem;
                      position: relative;
                      z-index: 10;
                      margin: 8px 12px;
                    `}
                  >
                    <Image src={strangerthings} />
                  </div>
                  <div>
                    <h3
                      css={css`
                        color: white;
                      `}
                    >
                      Stranger Things
                    </h3>
                    <p
                      css={css`
                        color: #0071e3;
                      `}
                    >
                      Downloading...
                    </p>
                  </div>
                </div>
              </div>
              <div
                css={css`
                  flex: 1;
                  display: flex;
                  padding: 0 0 0 3rem;
                  width: 52%;
                `}
              >
                <div
                  css={css`
                    margin: auto;
                  `}
                >
                  <h2
                    css={css`
                      color: white;
                      font-size: 3rem;
                      margin: 0;
                    `}
                  >
                    Download your shows to watch offline.
                  </h2>
                  <p
                    css={css`
                      color: white;
                      font-size: 1.5rem;
                      margin: 15px 0 0 0;
                    `}
                  >
                    Save your favorites easily and always have something to
                    watch.
                  </p>
                </div>
              </div>
            </Box>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
