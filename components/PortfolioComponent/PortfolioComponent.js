import { useEffect, useState } from "react";
import useMain from "../../hooks/useMain";
import Loader from "../Loader/Loader";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { listAllRepoApi } from "../../api/gitRepositoryApi";

export default function PortfolioComponent() {
  const [projectsList, setProjectsList] = useState([]);
  const { loadingPage, setLoading } = useMain();
  const [progressBar, setProgressBar] = useState("init-progress-bar");

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 500);
    setProgressBar("progress-bar");
    return () => {
      clearTimeout(timer1);
    };
  }, [loadingPage]);

  useEffect(() => {
    (async () => {
      const result = await listAllRepoApi();
      setProjectsList(result);
    })();
  }, []);

  if (loadingPage)
    return (
      <section id="about">
        <div className="content">
          <Loader progressBar={progressBar}>Cargando...</Loader>
        </div>
      </section>
    );

  return (
    <section id="portfolio">
      <div className="content">
        <h1>Repositories</h1>
        <div className="projects">
          {!projectsList && <p>Cargando...</p>}
          {projectsList &&
            projectsList
              .sort()
              .map((project) => (
                <PortfolioItem project={project} key={project.id} />
              ))}
        </div>
      </div>
    </section>
  );
}
