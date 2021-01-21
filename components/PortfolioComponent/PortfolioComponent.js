import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { listAllRepoApi } from "../../api/gitRepositoryApi";

export default function PortfolioComponent() {
  const [projectsList, setProjectsList] = useState(undefined);

  console.log("projectsList", projectsList);

  useEffect(() => {
    (async () => {
      const result = await listAllRepoApi();
      result.sort(function (a, b) {
        return a.upd < b.upd ? 1 : a.upd > b.upd ? -1 : 0;
      });
      setProjectsList(result);
    })();
  }, []);

  return (
    <section id="portfolio">
      <div className="content">
        <h1>Repositories</h1>
        <div className="projects">
          {!projectsList && <p>Loading...</p>}
          {projectsList &&
            projectsList.map((project) => (
              <PortfolioItem project={project} key={project.id} />
            ))}
        </div>
      </div>
    </section>
  );
}
