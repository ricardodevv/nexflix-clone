/*
 * @jsxImportSource @emotion/react
 */
import Image from "next/image";
import { useState } from "react";
import loadingGif from "../src/pictures/Netflix_LoadTime.gif";

const Loading = ({ status }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (status === "unauthenticated" && isLoading) {
    setIsLoading(!isLoading);
  }

  console.log(isLoading);

  if (isLoading) {
    return (
      <div>
        <Image src={loadingGif} layout="fill" />
      </div>
    );
  }

  return null;
};

export default Loading;
