import Link from "next/link";
import MainMenu from "./MainMenu";
import SocialMenu from "./SocialMenu";

export default function Header() {
  return (
    <header>
      <div className="sidebar">
        <Link href="/">
          <a className="logo">Mf</a>
        </Link>
        <MainMenu />

        <SocialMenu />
      </div>
    </header>
  );
}
