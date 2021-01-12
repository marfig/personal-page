import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import useMain from "../../../hooks/useMain";

export default function MainMenu() {
  const [menuOver, setMenuOver] = useState("");
  const [menuActive, setMenuActive] = useState("home");
  const { pathname } = useRouter();
  const { setLoading } = useMain();

  useEffect(() => {
    setMenuActive(pathname);
  }, [pathname]);

  const handleClick = (menu) => {
    if (menu !== menuActive) {
      setMenuActive(menu);
      setLoading(true);
    }
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
              className={
                menuActive === "/home" || menuActive === "/" ? "active" : ""
              }
              onClick={() => handleClick("/home")}
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
              className={menuActive === "/about" ? "active" : ""}
              onClick={() => handleClick("/about")}
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
              className={menuActive === "/portfolio" ? "active" : ""}
              onClick={() => handleClick("/portfolio")}
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
              className={menuActive === "/contact" ? "active" : ""}
              onClick={() => handleClick("/contact")}
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
