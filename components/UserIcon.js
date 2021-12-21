/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import yellowIcon from "../src/pictures/userIcons/yellow.jpg";
import redIcon from "../src/pictures/userIcons/red.png";
import blueIcon from "../src/pictures/userIcons/blue.png";
import { useState } from "react";

const modalStyles = css`
  display: block;
  background-color: black;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const UserIcon = () => {
  const [icon, setIcon] = useState(yellowIcon);
  const [modal, setModal] = useState(false);
  const icons = [yellowIcon, redIcon, blueIcon];
  console.log(icons.map((el) => el));

  const selectedIcon = (icon) => {
    setIcon(icon);
    setModal(!modal);
  };

  return (
    <div css={css``}>
      <div
        css={css`
          width: 3rem;
          height: 3rem;
          border: 1px solid;
        `}
        onClick={() => setModal(!modal)}
      >
        <Image src={icon} width={50} height={50} />
      </div>

      {/* Modal  */}
      <div
        css={css`
          ${modal ? modalStyles : `display: none`}
        `}
      >
        <div>
          <h2>Choose your Icon</h2>
          <div onClick={() => setModal(!modal)}>Close</div>
          {icons.map((icon, index) => (
            <div
              key={index}
              css={css`
                width: 5rem;
                height: 5rem;
              `}
              onClick={() => selectedIcon(icon.src)}
            >
              <Image src={icon.src} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserIcon;
