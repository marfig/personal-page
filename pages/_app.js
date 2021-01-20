import Router from "next/router";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "../scss/global.scss";
import "react-toastify/dist/ReactToastify.css";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import Loader from "../components/Loader";

export default function MyApp({ Component, pageProps }) {
  const [loadingPage, setLoadingPage] = useState(false);

  Router.onRouteChangeStart = (url) => {
    setLoadingPage(true);
  };

  Router.onRouteChangeComplete = (url) => {
    setLoadingPage(false);
  };

  if (loadingPage) {
    return <Loader>Loading...</Loader>;
  }

  return (
    <BasicLayout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </BasicLayout>
  );
}
