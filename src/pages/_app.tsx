import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MainNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default appWithTranslation(App);
