/* @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Layout from "../components/Layout";
import Image from "next/image";
import indexjpg from "../src/pictures/index.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
              height: 50rem;
              display: flex;
              border-bottom: 0.5rem solid gray;
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
                flex-direction: column;
                height: 50%;
                width: 40%;
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
                    "& .MuiInputBase-root:before, .MuiInputBase-root:after, .MuiInput-root:hover:not(.Mui-disabled):before":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-root": {
                      padding: "20px 0 20px 0px",
                    },
                    "& .MuiInputLabel-root": {
                      margin: "5px 0 0 10px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
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
