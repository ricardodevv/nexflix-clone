/* @jsxImportSource @emotion/react */
import { reducer, store } from "../components/Reducer";
import { StateProvider } from "../components/StateProvider";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  initializeApp(firebaseConfig);
  return (
    <StateProvider reducer={reducer} store={store}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
