/* @jsxImportSource @emotion/react */
import LayoutSignUp from "../../components/LayoutSignUp";
import signUpDevices from "../../src/pictures/signup-devices.png";
import Image from "next/image";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useStateValue } from "../../components/StateProvider";

const registration = () => {
  const [store, dispatch] = useStateValue();
  console.log(store);

  return (
    <LayoutSignUp>
      <div
        css={css`
          width: fit-content;
          margin: 0 auto 6rem auto;
          padding: 8rem;
        `}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "21.3rem",
            textAlign: "center",
          }}
        >
          <div
            css={css`
              margin: auto;
              width: 16rem;
            `}
          >
            <Image src={signUpDevices} objectFit="cover" />
          </div>
          <p
            css={css`
              margin: 2.5rem 0 0 0;
              font-size: 14px;
            `}
          >
            STEP <b>1</b>OF <b>3</b>
          </p>
          <p
            css={css`
              margin: 0;
              font-size: 1.5rem;
            `}
          >
            <b>Finish setting up your account</b>
          </p>
          <p
            css={css`
              margin: 10px 20px 0 20px;
              font-size: 18px;
            `}
          >
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </p>
          <Link href="/signup/regform" passHref>
            <Button
              sx={{
                backgroundColor: "#e50914",
                color: "white",
                p: 1.2,
                mt: 3,
                borderRadius: "2px",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#e50914",
                },
              }}
            >
              Next
            </Button>
          </Link>
        </Box>
      </div>
    </LayoutSignUp>
  );
};

export default registration;
