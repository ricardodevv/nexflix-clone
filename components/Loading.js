/*
 * @jsxImportSource @emotion/react
 */
import Image from "next/image";
import { useState } from "react";
import loadingGif from "../src/pictures/Netflix_LoadTime.gif";
import { useStateValue } from "./StateProvider";

const Loading = ({ status }) => {
  const [store, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(true);

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
