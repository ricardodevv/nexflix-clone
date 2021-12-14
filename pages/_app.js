/* @jsxImportSource @emotion/react */
import { reducer, store } from "../components/Reducer";
import { StateProvider } from "../components/StateProvider";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <StateProvider reducer={reducer} store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </StateProvider>
  );
}

export default MyApp;
