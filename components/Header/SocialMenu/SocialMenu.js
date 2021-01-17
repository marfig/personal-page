import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMenu() {
  return (
    <ul className="social-menu">
      <li>
        <a href="https://www.linkedin.com/in/marvinfigueredo" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://gitlab.com/marvin.figueredo" target="_blank">
          <FontAwesomeIcon icon={faGitlab} />
        </a>
      </li>
      <li>
        <a href="https://github.com/marfig" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/MarvinElder7" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    </ul>
  );
}
