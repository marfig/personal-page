import Link from "next/link";
import MainMenu from "./MainMenu";
import SocialMenu from "./SocialMenu";

export default function Header() {
  return (
    <header>
      <div className="sidebar">
        <Link href="/">
          <img src="/img/logo.png" alt="logo" className="logo" />
        </Link>

        <MainMenu />

        <SocialMenu />
      </div>
    </header>
  );
}
