import { useEffect } from "react";
import useMain from "../../hooks/useMain";

export default function PortfolioComponent() {
  const { loadingPage, setLoadingPage } = useMain();

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  if (loadingPage)
    return (
      <section id="portfolio">
        <div className="content">
          <p>Cargando...</p>
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
