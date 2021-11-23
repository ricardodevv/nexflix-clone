/* @jsxImportSource @emotion/react */
import { reducer, store } from "../components/Reducer";
import { StateProvider } from "../components/StateProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider reducer={reducer} store={store}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
