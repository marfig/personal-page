import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { ToastContainer } from "react-toastify";
import "../scss/global.scss";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
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
