/* @jsxImportSource @emotion/react */
import { reducer, store } from "../components/Reducer";
import { StateProvider } from "../components/StateProvider";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StateProvider reducer={reducer} store={store}>
        <Component {...pageProps} />
      </StateProvider>
    </SessionProvider>
  );
}

export default MyApp;
