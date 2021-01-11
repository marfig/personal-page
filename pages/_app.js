import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import "../scss/global.scss";
import "react-toastify/dist/ReactToastify.css";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import MainContext from "../context/MainContext";

export default function MyApp({ Component, pageProps }) {
  const [loadingPage, setLoadingPage] = useState(false);

  const mainData = useMemo(
    () => ({
      loadingPage,
      setLoadingPage: (loading) => setLoadingPage(loading),
    }),
    [loadingPage]
  );

  return (
    <MainContext.Provider value={mainData}>
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
    </MainContext.Provider>
  );
}
