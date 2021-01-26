import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faEnvelope,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { getMainMenuContent } from "../../../api/menuApi";

export default function MainMenu() {
  const [lan, setLan] = useState("es");
  const [menuContent, setMenuContent] = useState({});
  const [menuActive, setMenuActive] = useState("home");
  const { pathname } = useRouter();

  useEffect(() => {
    const content = getMainMenuContent(lan);
    setMenuContent(content);
  }, []);

  useEffect(() => {
    setMenuActive(pathname);
  }, [pathname]);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a
              className={
                menuActive === "/home" || menuActive === "/" ? "active" : ""
              }
            >
              <span>{menuContent.home}</span>
              <FontAwesomeIcon icon={faHome} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={menuActive === "/about" ? "active" : ""}>
              <span>{menuContent.about}</span>
              <FontAwesomeIcon icon={faUser} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a className={menuActive === "/work" ? "active" : ""}>
              <span>{menuContent.work}</span>
              <FontAwesomeIcon icon={faLaptop} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className={menuActive === "/portfolio" ? "active" : ""}>
              <span>{menuContent.code}</span>
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={menuActive === "/contact" ? "active" : ""}>
              <span>{menuContent.contact}</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
