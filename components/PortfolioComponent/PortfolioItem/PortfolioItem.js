import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { getLanguagesProjectApi } from "../../../api/gitLabApi";
import LanguageItem from "./LanguageItem/LanguageItem";

export default function PortfolioItem(props) {
  const { project, icon } = props;
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    (async () => {
      if (project) {
        const result = await getLanguagesProjectApi(project.id);
        setLanguages(result);
      }
    })();
  }, []);

  return (
    <div className="portfolio-item">
      <div className="title">
        <div>
          <FontAwesomeIcon icon={icon} />
          {project.name}
        </div>
        <div className="view-code">
          <a href={project.http_url_to_repo} target="_blank">
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
