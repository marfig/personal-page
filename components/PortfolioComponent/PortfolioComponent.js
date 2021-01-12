import { useEffect, useState } from "react";
import useMain from "../../hooks/useMain";
import Loader from "../Loader/Loader";

export default function PortfolioComponent() {
  const { loadingPage, setLoading } = useMain();
  const [progressBar, setProgressBar] = useState("init-progress-bar");

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, [loadingPage]);

  useEffect(() => {
    setProgressBar("progress-bar");
  }, []);

  if (loadingPage)
    return (
      <section id="about">
        <div className="content">
          <Loader progressBar={progressBar}>Cargando...</Loader>
        </div>
      </section>
    );

  if (loadingPage)
    return (
      <section id="about">
        <div className="content">
          <Loader startProgressBar={startProgressBar}>Cargando...</Loader>
        </div>
      </section>
    );

  return (
    <section id="portfolio">
      <div className="content">
        <h1>Portfolio</h1>
      </div>
    </section>
  );
}
