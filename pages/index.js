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
import downloadIcon from "../src/pictures/download-icon.gif";
import devices from "../src/pictures/devices.png";
import kids from "../src/pictures/kids.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";

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
            <Image
              src={indexjpg}
              alt="series-background"
              layout="fill"
              objectFit="cover"
            ></Image>
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
                width: 40rem;
                margin: auto;
                padding-top: 5rem;
                z-index: 4;
                align-items: center;
                justify-content: center;
              `}
            >
              <h2
                css={css`
                  color: white;
                  font-size: 3rem;
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
                  label="Email address"
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
                    backgroundColor: "#e50914",
                    color: "white",
                    "&:hover": {
                      transition: "none",
                      backgroundColor: "#e50914",
                    },
                  }}
                >
                  <p
                    css={css`
                      margin: 0;
                      padding-right: 5px;
                    `}
                  >
                    Get Started
                  </p>
                  <ArrowForwardIosIcon />
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
                    <Image src={tvimage} alt="tv streaming" objectFit="cover" />
                  </div>
                  <div
                    css={css`
                      background-color: black;
                      position: absolute;
                      height: 100%;
                      z-index: 0;
                      top: 18%;
                      display: flex;
                      max-width: 75%;
                      max-height: 60%;
                    `}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      css={css`
                        width: 100%;
                        height: 100%;
                      `}
                    >
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
                  <Image
                    src={mobileimage}
                    alt="mobile streaming"
                    objectFit="cover"
                  />
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
                    <Image
                      src={strangerthings}
                      alt="stranger things cover"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      margin-right: 1.5rem;
                    `}
                  >
                    <h3
                      css={css`
                        color: white;
                        margin: 0;
                        font-size: 1.1rem;
                      `}
                    >
                      Stranger Things
                    </h3>
                    <p
                      css={css`
                        color: #0071e3;
                        margin: 0;
                      `}
                    >
                      Downloading...
                    </p>
                  </div>
                  <div
                    css={css`
                      width: 20%;
                      align-self: center;
                      margin: auto;
                    `}
                  >
                    <Image
                      src={downloadIcon}
                      alt="download gif"
                      objectFit="cover"
                    />
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
          <div
            css={css`
              background-color: black;
              border-bottom: 0.5rem solid #222222;
              padding: 40px 45px;
            `}
          >
            <Box
              css={css`
                display: flex;
                max-width: 1100px;
                margin: auto;
              `}
            >
              <div
                css={css`
                  flex: 0 1 auto;
                  width: 52%;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  color: white;
                `}
              >
                <h2
                  css={css`
                    font-size: 3rem;
                    margin: 0;
                  `}
                >
                  Watch everywhere.
                </h2>
                <p
                  css={css`
                    font-size: 1.5rem;
                    margin: 15px 0 0 0;
                  `}
                >
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV without paying more.
                </p>
              </div>
              <div
                css={css`
                  flex: 0 1 auto;
                  width: 48%;
                  height: 100%;
                  position: relative;
                `}
              >
                <div
                  css={css`
                    position: relative;
                    z-index: 10;
                  `}
                >
                  <Image
                    src={devices}
                    alt="various devices streaming"
                    layout="responsive"
                  />
                </div>
                <div
                  css={css`
                    position: absolute;
                    width: 100%;
                    height: 46%;
                    top: 11%;
                    z-index: 1;
                  `}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    css={css`
                      width: 100%;
                      height: 100%;
                    `}
                  >
                    <source src="devices.mp4"></source>
                  </video>
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
            <Box sx={{ display: "flex", maxWidth: "1100px", margin: "auto" }}>
              <div
                css={css`
                  width: 48%;
                  flex: 0 1 auto;
                `}
              >
                <Image src={kids} alt="kids section" objectFit="cover" />
              </div>
              <div
                css={css`
                  flex: 0 1 auto;
                  width: 52%;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  color: white;
                `}
              >
                <h2
                  css={css`
                    font-size: 3rem;
                    margin: 0;
                  `}
                >
                  Create profiles for kids.
                </h2>
                <p
                  css={css`
                    font-size: 1.5rem;
                    margin: 15px 0 0 0;
                  `}
                >
                  Send kids on adventures with their favorite characters in a
                  space made just for them—free with your membership.
                </p>
              </div>
            </Box>
          </div>
          <div
            css={css`
              padding: 40px 45px;
            `}
          >
            <Box
              sx={{
                maxWidth: "50rem",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                color: "white",
                justifyContent: "center",
              }}
            >
              <h2
                css={css`
                  font-size: 3rem;
                  text-align: center;
                `}
              >
                Frequently Asked Questions
              </h2>
              <Accordion
                sx={{
                  backgroundColor: "#343434",
                  color: "white",
                  "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon sx={{ color: "white", fontSize: "3rem" }} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h3>What is Netflix?</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  </p>
                  <p>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "#343434",
                  color: "white",
                  "& .MuiPaper-root-MuiAccordion-root.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <AddIcon sx={{ color: "white", fontSize: "3rem" }} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h3>What is Netflix?</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  </p>
                  <p>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </AccordionDetails>
              </Accordion>
            </Box>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
