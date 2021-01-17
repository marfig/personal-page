import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PortfolioItem(props) {
  const { project, icon } = props;
  return (
    <div className="portfolio-item">
      <div className="title">
        <FontAwesomeIcon icon={icon} />
        {project.name}
      </div>
      <div className="info">{project.description}</div>
    </div>
  );
}
