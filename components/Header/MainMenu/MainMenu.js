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

export default function MainMenu() {
  const [menuActive, setMenuActive] = useState("home");
  const { pathname } = useRouter();

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
              <span>HOME</span>
              <FontAwesomeIcon icon={faHome} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={menuActive === "/about" ? "active" : ""}>
              <span>ABOUT</span>
              <FontAwesomeIcon icon={faUser} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a className={menuActive === "/work" ? "active" : ""}>
              <span>WORKS</span>
              <FontAwesomeIcon icon={faLaptop} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className={menuActive === "/portfolio" ? "active" : ""}>
              <span>CODE</span>
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={menuActive === "/contact" ? "active" : ""}>
              <span>CONTACT</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
