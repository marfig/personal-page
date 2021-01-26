import { useRouter } from "next/router";

export default function LanguageSelector() {
  const router = useRouter();

  const changeLang = (e, lang) => {
    e.preventDefault();
    router.push(router.pathname, router.pathname, {
      locale: lang,
    });
  };

  return (
    <ul className="lang-selector">
      <li>
        <a href="#" onClick={(e) => e.preventDefault()}>
          {router.locale.toUpperCase()}
        </a>
        <div>
          <ul className="list-lang hide">
            <li>
              <a href="#" onClick={(e) => changeLang(e, "es")}>
                ES
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => changeLang(e, "en")}>
                EN
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
