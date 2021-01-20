import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGitlab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { getLanguagesProjectApi } from "../../../api/gitLabApi";
import LanguageItem from "./LanguageItem/LanguageItem";
import { getLanguagesRepoApi } from "../../../api/gitHubApi";
import { GITHUB_REPO, GITLAB_REPO } from "../../../utils/constants";

export default function PortfolioItem(props) {
  const { project } = props;
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    (async () => {
      if (project) {
        if (project.type === GITLAB_REPO) {
          const result = await getLanguagesProjectApi(project.id);
          setLanguages(result);
        }

        if (project.type === GITHUB_REPO) {
          const result = await getLanguagesRepoApi(project.name);
          setLanguages(result);
        }
      }
    })();
  }, []);

  return (
    <div className="portfolio-item">
      <div className="title">
        <div>
          <FontAwesomeIcon
            icon={project.type === GITLAB_REPO ? faGitlab : faGithub}
          />
          {project.name}
        </div>
        <div className="view-code">
          <a href={project.url} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span>code</span>
          </a>
        </div>
      </div>
      <div className="info">{project.description}</div>
      <div className="footer">
        {languages && <LanguageItem languages={languages} />}
      </div>
    </div>
  );
}
