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
  const [menuOver, setMenuOver] = useState("");
  const [menuActive, setMenuActive] = useState("home");
  const { pathname } = useRouter();

  useEffect(() => {
    setMenuActive(pathname);
  }, [pathname]);

  const handleClick = (menu) => {
    if (menu !== menuActive) {
      setMenuActive(menu);
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
          <Link href="/work">
            <a
              className={menuActive === "/work" ? "active" : ""}
              onClick={() => handleClick("/work")}
              onMouseOver={() => handleOver("work")}
              onMouseLeave={handleOut}
            >
              {menuOver === "work" ? (
                <span>WORKS</span>
              ) : (
                <FontAwesomeIcon icon={faLaptop} />
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
                <span>CODE</span>
              ) : (
                <FontAwesomeIcon icon={faCode} />
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
