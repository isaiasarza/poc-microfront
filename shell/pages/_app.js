import App from "next/app";

import useLoginStore from "login/loginStore";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Nav from "@/components/nav";
import { useRouter } from "next/navigation";
import globalStore from "@/store/store";

function MyApp({ Component, pageProps }) {
 const router = useRouter()
 const [loggedIn, setLoggedIn] = useState();
  const initializeStore = () => {
    const unsub = globalStore.subscribe((state) => {
      const { accountInfo } = state;
      const _loggedIn = (!!accountInfo?.user);
      setLoggedIn(_loggedIn);
    });
  };

  useEffect(() => {
   initializeStore();
  }, [loggedIn]);

  return (
    <>
      <Nav isLoggedIn={loggedIn} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
