import { useEffect, useState } from "react";
import { listProjectsApi } from "../../api/gitLabApi";
import useMain from "../../hooks/useMain";
import Loader from "../Loader/Loader";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";

export default function PortfolioComponent() {
  const [projectsGitLab, setProjectsGitLab] = useState([]);
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
      const result = await listProjectsApi();
      setProjectsGitLab(result);
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
          {!projectsGitLab && <p>Cargando...</p>}
          {projectsGitLab &&
            projectsGitLab.map((project) => (
              <PortfolioItem
                project={project}
                icon={faGitlab}
                key={project.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
