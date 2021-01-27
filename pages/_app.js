import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "../scss/global.scss";
import "react-toastify/dist/ReactToastify.css";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import Loader from "../components/Loader";
import { getLoaderContent } from "../api/loaderApi";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loaderContent, setLoaderContent] = useState({});
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    const content = getLoaderContent(router.locale || "es");
    setLoaderContent(content);
  }, [router.locale]);

  Router.onRouteChangeStart = (url) => {
    setLoadingPage(true);
  };

  Router.onRouteChangeComplete = (url) => {
    setLoadingPage(false);
  };

  if (loadingPage) {
    return <Loader>{loaderContent.text}</Loader>;
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
