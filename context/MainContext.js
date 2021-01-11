import { createContext } from "react";

const MainContext = createContext({
  loadingPage: false,
  setLoadingPage: () => null,
});

export default MainContext;
