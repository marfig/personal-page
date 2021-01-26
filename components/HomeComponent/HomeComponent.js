import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getHomeContent } from "../../api/homeApi";

export default function HomeComponent() {
  const [pageContent, setPageContent] = useState({});
  const router = useRouter();

  useEffect(() => {
    const content = getHomeContent(router.locale || "es");
    setPageContent(content);
  }, [router?.locale]);

  return (
    <section id="home">
      <h1>
        {pageContent.title} <strong>{pageContent.name}</strong>
      </h1>
      <h2>{pageContent.subtitle}</h2>
    </section>
  );
}
