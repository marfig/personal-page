import "../scss/global.scss";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}
