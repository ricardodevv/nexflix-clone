/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import Home from "../components/Home";
import HomeUnlogged from "../components/HomeUnlogged";
import { useStateValue } from "../components/StateProvider";

const Index = () => {
  const [store, dispatch] = useStateValue();
  console.log(store.user.length);

  if (store.user.length === 0) {
    return <HomeUnlogged />;
  } else {
    return <Home />;
  }
};

export default Index;
