/*
 * @jsxImportSource @emotion/react
 */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Layout from "../components/Layout";
import Image from "next/image";
import backgroundjpg from "../src/pictures/mainbackground.jpg";
import tvimage from "../src/pictures/tv.png";
import mobileimage from "../src/pictures/mobile.jpg";
import strangerthings from "../src/pictures/boxshot.png";
import Box from "@mui/material/Box";
import downloadIcon from "../src/pictures/download-icon.gif";
import devices from "../src/pictures/devices.png";
import kids from "../src/pictures/kids.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import GetStartedField from "../components/GetStartedField";
import { useRouter } from "next/router";
import Home from "../components/Home";
import { useStateValue } from "../components/StateProvider";
import { useSession } from "next-auth/react";

const AccordionStyled = styled((props) => <Accordion {...props} />)(() => ({
  backgroundColor: "#343434",
  color: "white",
  margin: "5px 0",
  "& .MuiAccordionSummary-root": {
    borderBottom: "1px solid black",
  },
}));

const AccordionSummaryStyled = styled((props) => (
  <AccordionSummary
    expandIcon={<AddIcon sx={{ color: "white", fontSize: "3rem" }} />}
    {...props}
  />
))(() => ({
  "& .MuiAccordionSummary-content.Mui-expanded, .MuiAccordionSummary-content": {
    margin: 0,
  },
}));

const Index = () => {
  const { data: session } = useSession();

  return (
    <Layout pageTitle="Nextflix latam">
      <div>
        {!session ? (
          <div>
            <div
              css={css`
                background-color: black;
                position: relative;
                height: 41rem;
                z-index: 0;
                display: flex;
                justify-content: center;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: -140px;
                  width: 100%;
                  height: 50rem;
                  display: flex;
                  border-bottom: 0.5rem solid #222222;
                  opacity: 0.5;
                  z-index: -1;
                `}
              >
                <Image
                  src={backgroundjpg}
                  alt="series-background"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  width: 40rem;
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
                <GetStartedField id="getStarted1" />
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
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                        TV, Blu-ray players, and more.
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
                        <Image
                          src={tvimage}
                          alt="tv streaming"
                          objectFit="cover"
                        />
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
                      Stream unlimited movies and TV shows on your phone,
                      tablet, laptop, and TV without paying more.
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
                <Box
                  sx={{ display: "flex", maxWidth: "1100px", margin: "auto" }}
                >
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
                      Send kids on adventures with their favorite characters in
                      a space made just for them—free with your membership.
                    </p>
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
                  <AccordionStyled disableGutters square>
                    <AccordionSummaryStyled
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h3>What is Netflix?</h3>
                    </AccordionSummaryStyled>
                    <AccordionDetails>
                      <p>
                        Netflix is a streaming service that offers a wide
                        variety of award-winning TV shows, movies, anime,
                        documentaries, and more on thousands of
                        internet-connected devices.
                      </p>
                      <p>
                        You can watch as much as you want, whenever you want
                        without a single commercial – all for one low monthly
                        price. There's always something new to discover and new
                        TV shows and movies are added every week!
                      </p>
                    </AccordionDetails>
                  </AccordionStyled>
                  <AccordionStyled disableGutters square>
                    <AccordionSummaryStyled
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <h3>How much does Netflix cost?</h3>
                    </AccordionSummaryStyled>
                    <AccordionDetails>
                      <p>
                        Watch Netflix on your smartphone, tablet, Smart TV,
                        laptop, or streaming device, all for one fixed monthly
                        fee. Plans range from USD7.99 to USD13.99 a month. No
                        extra costs, no contracts.
                      </p>
                    </AccordionDetails>
                  </AccordionStyled>
                  <AccordionStyled disableGutters square>
                    <AccordionSummaryStyled
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <h3>Where can I watch?</h3>
                    </AccordionSummaryStyled>
                    <AccordionDetails>
                      <p>
                        Watch anywhere, anytime. Sign in with your Netflix
                        account to watch instantly on the web at netflix.com
                        from your personal computer or on any internet-connected
                        device that offers the Netflix app, including smart TVs,
                        smartphones, tablets, streaming media players and game
                        consoles.
                      </p>
                      <p>
                        You can also download your favorite shows with the iOS,
                        Android, or Windows 10 app. Use downloads to watch while
                        you're on the go and without an internet connection.
                        Take Netflix with you anywhere.
                      </p>
                    </AccordionDetails>
                  </AccordionStyled>
                  <AccordionStyled disableGutters square>
                    <AccordionSummaryStyled
                      aria-controls="panel4a-content"
                      id="panel4a-header"
                    >
                      <h3>How do I cancel?</h3>
                    </AccordionSummaryStyled>
                    <AccordionDetails>
                      <p>
                        Netflix is flexible. There are no pesky contracts and no
                        commitments. You can easily cancel your account online
                        in two clicks. There are no cancellation fees – start or
                        stop your account anytime.
                      </p>
                    </AccordionDetails>
                  </AccordionStyled>
                  <AccordionStyled disableGutters square>
                    <AccordionSummaryStyled
                      aria-controls="panel5a-content"
                      id="panel5a-header"
                    >
                      <h3>What can I watch on Netflix?</h3>
                    </AccordionSummaryStyled>
                    <AccordionDetails>
                      <p>
                        Netflix has an extensive library of feature films,
                        documentaries, TV shows, anime, award-winning Netflix
                        originals, and more. Watch as much as you want, anytime
                        you want.
                      </p>
                    </AccordionDetails>
                  </AccordionStyled>
                  <AccordionStyled disableGutters square>
                    <AccordionSummaryStyled
                      aria-controls="panel6a-content"
                      id="panel6a-header"
                    >
                      <h3>Is Netflix good for kids?</h3>
                    </AccordionSummaryStyled>
                    <AccordionDetails>
                      <p>
                        The Netflix Kids experience is included in your
                        membership to give parents control while kids enjoy
                        family-friendly TV shows and movies in their own space.
                      </p>
                      <p>
                        Kids profiles come with PIN-protected parental controls
                        that let you restrict the maturity rating of content
                        kids can watch and block specific titles you don’t want
                        kids to see.
                      </p>
                    </AccordionDetails>
                  </AccordionStyled>
                  <h4
                    css={css`
                      margin-top: 3rem;
                      text-align: center;
                    `}
                  >
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h4>
                  <GetStartedField id="getStarted2" />
                </Box>
              </div>
            </div>
          </div>
        ) : (
          <Home />
        )}
      </div>
    </Layout>
  );
};

export default Index;
