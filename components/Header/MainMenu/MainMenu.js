import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function MainMenu(props) {
  const [menuOver, setMenuOver] = useState("");
  const [menuActive, setMenuActive] = useState("home");

  const handleClick = (menu) => {
    setMenuActive(menu);
  };

  const handleOver = (menu) => {
    setMenuOver(menu);
  };

  const handleOut = () => {
    setMenuOver("");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a
              className={menuActive === "home" ? "active" : ""}
              onClick={() => handleClick("home")}
              onMouseOver={() => handleOver("home")}
              onMouseLeave={handleOut}
            >
              {menuOver === "home" ? (
                <span>HOME</span>
              ) : (
                <FontAwesomeIcon icon={faHome} />
              )}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={menuActive === "about" ? "active" : ""}
              onClick={() => handleClick("about")}
              onMouseOver={() => handleOver("about")}
              onMouseLeave={handleOut}
            >
              {menuOver === "about" ? (
                <span>ABOUT</span>
              ) : (
                <FontAwesomeIcon icon={faUser} />
              )}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a
              className={menuActive === "portfolio" ? "active" : ""}
              onClick={() => handleClick("portfolio")}
              onMouseOver={() => handleOver("portfolio")}
              onMouseLeave={handleOut}
            >
              {menuOver === "portfolio" ? (
                <span>WORKS</span>
              ) : (
                <FontAwesomeIcon icon={faBriefcase} />
              )}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={menuActive === "contact" ? "active" : ""}
              onClick={() => handleClick("contact")}
              onMouseOver={() => handleOver("contact")}
              onMouseLeave={handleOut}
            >
              {menuOver === "contact" ? (
                <span>CONTACT</span>
              ) : (
                <FontAwesomeIcon icon={faEnvelope} />
              )}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}